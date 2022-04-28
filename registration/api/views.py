from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ParticipantSerializer
from .models import Participant
# Create your views here.

from django.http import JsonResponse
@api_view(['GET'])
def overview(request):
    api_urls = {
        'list':'/list',
        'create':'/create'
    }
    return Response(api_urls)



@api_view(['GET'])
def listView(request):
    participants = Participant.objects.all()
    serializers = ParticipantSerializer(participants,many=True)
    return Response(serializers.data)

@api_view(['POST'])
def createView(request):
    serializer = ParticipantSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)