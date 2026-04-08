from rest_framework import viewsets
from .models import Depense
from .serializers import DepenSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.db.models import Sum, Avg, Max, Min, Count
from .models import Depense


class DepenseViewSet(viewsets.ModelViewSet):
    queryset = Depense.objects.all().order_by("-date_depense")
    serializer_class = DepenSerializer
    

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
@permission_classes([AllowAny])
def stats_depenses(request):
    depenses = Depense.objects.filter()
    
    # Total par catégorie
    par_categorie = depenses.values('categorie').annotate(
        total=Sum('montant'),
        count=Count('id')
    )
    
    # KPIs globaux
    kpis = depenses.aggregate(
        total=Sum('montant'),
        moyenne=Avg('montant'),
        max=Max('montant'),
        min=Min('montant'),
        count=Count('id')
    )
    
    # Total par mois
    from django.db.models.functions import TruncMonth
    par_mois = depenses.annotate(
        mois=TruncMonth('date_depense')
    ).values('mois').annotate(
        total=Sum('montant')
    ).order_by('mois')
    
    return Response({
        'kpis': kpis,
        'par_categorie': list(par_categorie),
        'par_mois': list(par_mois)
    })