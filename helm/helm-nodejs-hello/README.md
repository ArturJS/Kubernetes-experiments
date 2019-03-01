# How to use:

```
cd nodejs-hello-app

docker build -t localhost:32000/nodejs-hello-app .

docker push localhost:32000/nodejs-hello-app

helm package nodejs-hello-chart

helm install nodejs-hello-chart
```

Enjoy!
