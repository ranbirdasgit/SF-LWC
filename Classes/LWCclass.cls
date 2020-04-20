public with sharing class LWCclass {
    @AuraEnabled(cacheable=true)
    public static string getLwcMethod(Id recordId){
        //List<Account> x=[select id,name from Account limit 5];
        return 'Ranbir apex method';
    }
}
