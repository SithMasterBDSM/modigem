//FACEBOOK
ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
if (process.env.HOSTNAME === 'modigem.museodigital.org') {
 ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '539374709554821',
    secret: 'fa62dfade8567db49830fcd8ae6cb471'
});
        }else{
 ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1671219196483781',
    secret: 'f864e2c59979eaed7c47b3905d1403eb'
});
}
