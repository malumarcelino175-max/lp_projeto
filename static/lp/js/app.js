/* LP Suplementos — funções compartilhadas: carrinho, menu, toast, renderização */
(function () {
  const CHAVE = "lp_carrinho";

  const LP = {
    // ---------- utilidades ----------
    preco(v) {
      return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    },
    estrelas(nota) {
      const cheias = Math.round(nota);
      return "★".repeat(cheias) + "☆".repeat(5 - cheias);
    },
    produto(slug) {
      return (window.LP_PRODUTOS || []).find((p) => p.slug === slug);
    },
    toast(msg) {
      let el = document.querySelector(".toast");
      if (!el) {
        el = document.createElement("div");
        el.className = "toast";
        document.body.appendChild(el);
      }
      el.textContent = msg;
      el.classList.add("show");
      clearTimeout(el._t);
      el._t = setTimeout(() => el.classList.remove("show"), 2500);
    },

    // ---------- carrinho (localStorage) ----------
    carrinho() {
      try {
        return JSON.parse(localStorage.getItem(CHAVE)) || [];
      } catch (e) {
        return [];
      }
    },
    salvar(itens) {
      localStorage.setItem(CHAVE, JSON.stringify(itens));
      LP.atualizarContador();
      document.dispatchEvent(new CustomEvent("carrinho:mudou"));
    },
    adicionar(slug, qtd, sabor) {
      const itens = LP.carrinho();
      const existente = itens.find((i) => i.slug === slug && i.sabor === sabor);
      if (existente) existente.qtd += qtd || 1;
      else itens.push({ slug: slug, qtd: qtd || 1, sabor: sabor || null });
      LP.salvar(itens);
      const p = LP.produto(slug);
      LP.toast((p ? p.nome : "Produto") + " adicionado ao carrinho");
    },
    alterarQtd(indice, delta) {
      const itens = LP.carrinho();
      if (!itens[indice]) return;
      itens[indice].qtd += delta;
      if (itens[indice].qtd < 1) itens.splice(indice, 1);
      LP.salvar(itens);
    },
    remover(indice) {
      const itens = LP.carrinho();
      itens.splice(indice, 1);
      LP.salvar(itens);
    },
    total() {
      return LP.carrinho().reduce((soma, i) => {
        const p = LP.produto(i.slug);
        return soma + (p ? p.preco * i.qtd : 0);
      }, 0);
    },
    atualizarContador() {
      const n = LP.carrinho().reduce((s, i) => s + i.qtd, 0);
      document.querySelectorAll("[data-cart-count]").forEach((el) => {
        el.textContent = n;
        el.style.display = n ? "" : "none";
      });
    },

    // ---------- componentes ----------
    cardProduto(p) {
      const desconto = p.preco_antigo
        ? Math.round((1 - p.preco / p.preco_antigo) * 100)
        : 0;
      return `
      <article class="card">
        <a class="card-img" href="${window.LP_URL_PRODUTO}${p.slug}/">
          <img src="${p.imagem}" alt="${p.nome}" loading="lazy">
          ${desconto ? `<span class="tag">-${desconto}%</span>` : ""}
        </a>
        <div class="card-body">
          <span class="card-cat">${p.categoria}</span>
          <h3><a href="${window.LP_URL_PRODUTO}${p.slug}/">${p.nome}</a></h3>
          <p class="muted" style="font-size:.9rem">${p.resumo}</p>
          <div class="stars">${LP.estrelas(p.nota)} <span class="muted">(${p.avaliacoes})</span></div>
          <div class="price">
            <strong>${LP.preco(p.preco)}</strong>
            ${p.preco_antigo ? `<s>${LP.preco(p.preco_antigo)}</s>` : ""}
          </div>
          <div style="display:flex;gap:8px;margin-top:auto">
            <a class="btn btn-ghost" href="${window.LP_URL_PRODUTO}${p.slug}/">Detalhes</a>
            <button class="btn btn-primary" data-add="${p.slug}">Comprar</button>
          </div>
        </div>
      </article>`;
    },
    renderPromocoes(seletor) {
      const alvo = document.querySelector(seletor);
      if (!alvo) return;
      const ativas = (window.LP_PROMOCOES || []).filter((p) => p.ativo);
      if (!ativas.length) return (alvo.style.display = "none");
      alvo.innerHTML =
        '<div class="container">' +
        ativas
          .map(
            (p) =>
              `<span><strong>${p.titulo}</strong> ${p.descricao}${
                p.cupom ? ` — cupom <span class="coupon">${p.cupom}</span>` : ""
              }</span>`
          )
          .join("") +
        "</div>";
    },
  };

  // menu mobile + delegação do botão "Comprar"
  document.addEventListener("DOMContentLoaded", function () {
    LP.atualizarContador();
    const toggle = document.querySelector(".menu-toggle");
    if (toggle)
      toggle.addEventListener("click", () =>
        document.querySelector(".nav").classList.toggle("open")
      );
    document.addEventListener("click", function (e) {
      const btn = e.target.closest("[data-add]");
      if (btn) LP.adicionar(btn.dataset.add, 1, null);
    });
  });

  window.LP = LP;
})();
