# LP Suplementos — Projeto Django pronto

## Como abrir e rodar (2 comandos)

```bash
pip install -r requirements.txt
python manage.py runserver
```

Depois abra no navegador: **http://127.0.0.1:8000**

## Páginas

| Página | Endereço |
|---|---|
| Início | / |
| Produtos | /produtos/ |
| Detalhe do produto | /produtos/pre-treino-ignite/ |
| Carrinho | /carrinho/ |
| Sobre | /sobre/ |
| Contato | /contato/ |
| Acesso | /login/ |
| Painel da loja | /admin-loja/ |

## Estrutura

- `manage.py` — comando para rodar o projeto
- `lp_site/` — configurações do Django (settings, urls, wsgi)
- `loja/` — aplicativo com as views e rotas das páginas
- `templates/lp/` — telas em HTML (usam {% static %} e {% url %})
- `static/lp/` — CSS, JavaScript e imagens

Os produtos e promoções de exemplo ficam em `static/lp/js/dados.js`.
O carrinho funciona no navegador (localStorage); para vender de verdade,
ligue o botão de finalizar a uma view POST sua.
