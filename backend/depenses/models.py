from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

class Depense(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    montant = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    categorie = models.CharField(
        max_length=50,
        choices=[                                 
            ('alimentation', 'Alimentation'),
            ('transport', 'Transport'),
            ('loisirs', 'Loisirs'),
        ]
    )
    date_depense = models.DateField(auto_now_add=True)
    # isEditing = models.BooleanField(default=False)

    def __str__(self):
        return self.montant