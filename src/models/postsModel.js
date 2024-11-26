import 'dotenv/config'
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js"
import { config } from "dotenv";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)
export async function getTodosPosts() {
   
        // Obtém uma referência ao banco de dados e à coleção de posts
        const db = conexao.db('imersao-instabytes');
        const postsCollection = db.collection('posts');

        // Encontra todos os documentos na coleção e retorna um array
        
        return postsCollection.find().toArray();
}

export async function criarPost(novoPost){
     
     const db = conexao.db('imersao-instabytes');
     const postsCollection = db.collection('posts');
     return postsCollection.insertOne(novoPost);

}

export async function atualizarPost(id, novoPost){
     
    const db = conexao.db('imersao-instabytes');
    const postsCollection = db.collection('posts');
    const objID = ObjectId.createFromHexString(id);
    return postsCollection.updateOne({_id: new ObjectId(objID)},{$set:novoPost});

}