from rest_framework import authentication
from comedianModel.models import Comedian, Jokes
from .serializers import ComedianSerializer, JokesSerializer
from rest_framework import viewsets


class ComedianViewSet(viewsets.ModelViewSet):
    serializer_class = ComedianSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Comedian.objects.all()


class JokesViewSet(viewsets.ModelViewSet):
    serializer_class = JokesSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Jokes.objects.all()
