from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ComedianViewSet, JokesViewSet

router = DefaultRouter()
router.register("comedian", ComedianViewSet)
router.register("jokes", JokesViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
