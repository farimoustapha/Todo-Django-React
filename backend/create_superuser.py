import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'todo_backend.settings')
django.setup()

from django.contrib.auth.models import User

if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'motdepasse123')
    print("Superuser créé !")
else:
    print("Superuser existe déjà.")