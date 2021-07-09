from rest_framework import serializers
from comedianModel.models import Comedian, Jokes


class ComedianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comedian
        fields = "__all__"


class JokesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jokes
        fields = "__all__"
