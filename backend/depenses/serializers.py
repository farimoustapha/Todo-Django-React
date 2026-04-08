from .models import Depense
from rest_framework import serializers


class DepenSerializer(serializers.ModelSerializer):

    class Meta:
        model = Depense
        fields = "__all__"
        