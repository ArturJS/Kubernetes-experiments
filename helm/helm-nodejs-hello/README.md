# How to use:

```
helm package nodejs-hello-chart

helm install nodejs-hello-chart
```

Enjoy!

<br>
<br>

Also you can build docker image localy
```
cd nodejs-hello-app

docker build -t localhost:32000/nodejs-hello-app .

docker push localhost:32000/nodejs-hello-app
```
