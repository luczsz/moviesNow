import React, {useEffect, useState, createContext} from 'react';

import firebaseConfig from '../services/firebaseConnection';
//Async Storage

import { getDatabase, ref, set, child, get } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const [user, setUser ] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    //UseEffect para puxar os dados sobre o user logado

    //Logando user 
    async function signIn(email, senha){
        signInWithEmailAndPassword(getAuth(firebaseConfig), email, senha)
        .then((userCredential) => {
            //Login foi bem sucedido, pode acessar os dados do user.
            const user = userCredential.user;

            const database = getDatabase(firebaseConfig);
            const dataRef = ref(database, 'usuarios/' + user.uid); // referencia do nó

            get(dataRef)
            .then((snap) => {
                if(snap.exists()){
                    const userData = snap.val();
                    let data = {
                        nome: userData.nome,
                        email: userData.email,
                        id: userData.id,
                    };
                    setUser(data);
                    //dados salvo offline
                } else {
                    alert('User não encontrado');
                }
            })
            .catch( (error) => {
                alert('erro ao consultar os dados' + error);
            });

        })
        .catch( (error) => {
            const erroCode = error.code;
            const errorMensage = error.message;
            alert('Errro no login:', erroCode, errorMensage);
        });
    };

    //Cadastrando user 
    async function signUp(nome, email, senha){
        createUserWithEmailAndPassword(getAuth(firebaseConfig), email, senha)
        .then( (userCredential) => {
            const userId = userCredential.user.uid;

            const database = getDatabase(firebaseConfig);
            const dataRef = ref(database, 'usuarios/' + userId);

            const data = {
                nome: nome,
                email: email,
                senha: senha,
                id: userId,
            };

            set(dataRef, data)
            .then( () => {
                let data = {
                    nome: nome,
                    email: email,
                    senha: senha,
                    id: userId,
                };
                setUser(data);
                //Dados offline
            })
            .catch( (error) => [
                alert('Erro ao salvar dados', error)
            ]);
        })
        .catch((error) =>{
            alert('Erro na criação do usuario', error);
        })
    }

    //Deslogando user
    async function signOut(){
        const auth = getAuth(firebaseConfig);

        signOut(auth)
        .then(
            console.log('Certo')
        )
        .catch( (error) => {
            console.log('error ao deslogar', error);
            return;
        })
    }

    //Dados Offline

    return(
        <AuthContext.Provider value={{ singned: !!user, user, signIn, signUp, signOut, loading}} >
            {children}
        </AuthContext.Provider>
    )
}
