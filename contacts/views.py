from django.shortcuts import render, redirect
from .models import Contact
from .forms import ContactForm

def home(request):
    return render(request, "contacts/home.html")

def contact_list(request):
    search = request.GET.get("search", "")

    if search:
        contacts = Contact.objects.filter(
            name__icontains=search
        )
    else:
        contacts = Contact.objects.all()

    return render(request, "contacts/contact_list.html", {
        "contacts": contacts,
        "search": search
    })


def add_contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect("contact_list")

    else:
        form = ContactForm()

    return render(request, "contacts/add_contact.html", {
        "form": form
    })


def edit_contact(request, id):
    contact = Contact.objects.get(id=id)

    if request.method == "POST":
        form = ContactForm(request.POST, instance=contact)

        if form.is_valid():
            form.save()
            return redirect("contact_list")

    else:
        form = ContactForm(instance=contact)

    return render(request, "contacts/edit_contact.html", {
        "form": form,
        "contact": contact
    })

def delete_contact(request, id):
    contact = Contact.objects.get(id=id)

    if request.method == "POST":
        contact.delete()
        return redirect("contact_list")

    return render(request, "contacts/delete_contact.html", {
        "contact": contact
    })