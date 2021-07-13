
export const verifyPermission = ( permission) => {
    //Permissions of every role.
    const role = localStorage.getItem('role');
    const castingAssistant= ['get:actors', 'get:movies', 'get:actor', 'get:movie','get:user_role'];
    const castingDirector = ['delete:actor','post:actor','patch:actor','patch:movie'].concat([castingAssistant]);
    const executiveProducer = ['delete:movie','post:movie'].concat(castingDirector);

    switch (role) {
        case 'Casting assistant':
            castingAssistant.forEach((element) => {
                if(element === permission){
                    return true;
                }
            });
            return false;
        case 'Casting director':
            castingDirector.forEach(element=>{
                if(element === permission){
                    return true;
                }
            });
            return false
        case 'Executive Producer':
            executiveProducer.forEach(element=>{
                if(element === permission){
                    return true;
                }
            });
            return false
        default:
            return false;
    }
}