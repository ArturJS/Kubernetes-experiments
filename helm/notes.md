`$ helm install stable/nginx-ingress --name nginx-ingress --set rbac.create=true`

NAME:   nginx-ingress
LAST DEPLOYED: Thu Feb 21 08:18:57 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/ServiceAccount
NAME           SECRETS  AGE
nginx-ingress  1        1s

==> v1beta1/ClusterRoleBinding
NAME           AGE
nginx-ingress  1s

==> v1beta1/Role
NAME           AGE
nginx-ingress  1s

==> v1beta1/RoleBinding
NAME           AGE
nginx-ingress  1s

==> v1/Pod(related)
NAME                                            READY  STATUS             RESTARTS  AGE
nginx-ingress-controller-9cf6cf578-ndx9g        0/1    ContainerCreating  0         0s
nginx-ingress-default-backend-56d99b86fb-d4ntb  0/1    ContainerCreating  0         0s

==> v1/ConfigMap
NAME                      DATA  AGE
nginx-ingress-controller  1     1s

==> v1beta1/ClusterRole
NAME           AGE
nginx-ingress  1s

==> v1/Service
NAME                           TYPE          CLUSTER-IP     EXTERNAL-IP  PORT(S)                     AGE
nginx-ingress-controller       LoadBalancer  10.152.183.82  <pending>    80:32594/TCP,443:32185/TCP  0s
nginx-ingress-default-backend  ClusterIP     10.152.183.92  <none>       80/TCP                      0s

==> v1beta1/Deployment
NAME                           DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
nginx-ingress-controller       1        1        1           0          0s
nginx-ingress-default-backend  1        1        1           0          0s


NOTES:
The nginx-ingress controller has been installed.
It may take a few minutes for the LoadBalancer IP to be available.
You can watch the status by running 'kubectl --namespace default get services -o wide -w nginx-ingress-controller'

An example Ingress that makes use of the controller:

  apiVersion: extensions/v1beta1
  kind: Ingress
  metadata:
    annotations:
      kubernetes.io/ingress.class: nginx
    name: example
    namespace: foo
  spec:
    rules:
      - host: www.example.com
        http:
          paths:
            - backend:
                serviceName: exampleService
                servicePort: 80
              path: /
    # This section is only required if TLS is to be enabled for the Ingress
    tls:
        - hosts:
            - www.example.com
          secretName: example-tls

If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:

  apiVersion: v1
  kind: Secret
  metadata:
    name: example-tls
    namespace: foo
  data:
    tls.crt: <base64 encoded cert>
    tls.key: <base64 encoded key>
  type: kubernetes.io/tls
