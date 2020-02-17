from kamailio.serializers import SubscriberSerializer

def custom_jwt_response_handler(token, user=None, request=None):
    return {
        'token' : token,
        'user' : SubscriberSerializer(user, context={'request' : request}).data
    }