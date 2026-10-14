from django.shortcuts import render


def home(request):
    return render(request, "lp/index.html")


def produtos(request):
    return render(request, "lp/produtos.html")


def produto(request, slug=""):
    return render(request, "lp/produto.html", {"slug": slug})


def carrinho(request):
    return render(request, "lp/carrinho.html")


def sobre(request):
    return render(request, "lp/sobre.html")


def contato(request):
    return render(request, "lp/contato.html")


def login(request):
    return render(request, "lp/login.html")


def admin(request):
    return render(request, "lp/admin.html")
