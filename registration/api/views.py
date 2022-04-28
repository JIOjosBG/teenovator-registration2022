from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.

from django.http import JsonResponse
@api_view(['GET'])
def overview(request):
    api_urls = {
        'list':'/list',
        'create':'/create'
    }
    return Response(api_urls)