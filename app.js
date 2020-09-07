//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");


//Defaults Item
const questions = [
  "Si vous pouviez inviter n’importe qui à dîner dans le monde entier, qui choisiriez-vous ?",
  "Aimeriez-vous être célèbre ? De quelle manière ?",
  "Avant de passer un coup de fil, vous arrive-t-il de répéter ce que vous allez dire ? Pourquoi ?",
  "À quoi ressemblerait une journée “parfaite” pour vous ?",
  "Quand avez-vous chanté pour la dernière fois pour vous-même ? Pour quelqu’un d’autre ?",
  "Si vous pouviez vivre jusqu’à 90 ans et garder soit l’esprit soit le corps d’un trentenaire pour les 60 dernières années de votre vie, lequel choisiriez-vous ?",
  "Avez-vous un pressentiment secret sur la façon dont vous allez mourir ?",
  "Citez trois choses que vous et votre partenaire semblez avoir en commun.",
  "Quelle est la chose pour laquelle vous êtes le plus reconnaissant dans votre vie ?",
  "Si vous pouviez changer quelque chose dans la manière dont vous avez été élevé, qu’est-ce que ce serait ?",
  "En quatre minutes, racontez votre vie à votre partenaire, avec le plus de détails possibles.",
  "Si vous pouviez vous réveiller demain en ayant gagné une qualité ou une compétence, laquelle serait-elle ?",
  "Si une boule de cristal pouvait vous révéler la vérité sur vous, votre vie, le futur ou quoi que ce soit d’autre, que voudriez-vous savoir ?",
  "Y a-t-il quelque chose que vous rêvez de faire depuis longtemps ? Pourquoi ne l’avez-vous pas fait ?",
  "Quelle est la plus grande réussite de votre vie ?",
  "Quelle est la chose la plus importante pour vous en amitié ?",
  "Quel est votre plus beau souvenir ?",
  "Quel est votre pire souvenir ?",
  "Si vous saviez que vous alliez mourir subitement dans un an, changeriez-vous quelque chose à votre style de vie ? Pourquoi ?",
  "Que signifie le mot amitié pour vous ?",
  "Quels rôles jouent l’amour et l’affection dans votre vie ?",
  "Échangez avec votre partenaire quelque chose que vous considérez être chez lui une caractéristique positive. Partagez-en cinq au total.",
  "À quel point votre famille est-elle unie et chaleureuse ? Pensez-vous que votre enfance a été plus heureuse que celle de la plupart des gens ?",
  "Que pensez-vous de votre relation avec votre mère ?",
  "Énoncez chacun trois vérités commençant par le mot “nous”. Par exemple, “Nous nous sentons tous les deux dans cette pièce…”",
  "Complétez cette phrase : “J’aimerais avoir quelqu’un avec qui partager…”",
  "Si vous deviez devenir proche de votre partenaire, dites-lui ce qui serait important qu’il ou elle sache.",
  "Dites à votre partenaire ce que vous aimez chez lui ; soyez très honnête cette fois, en disant des choses que vous ne diriez pas à une personne que vous venez de rencontrer.",
  "Racontez à votre partenaire un moment embarrassant de votre vie.",
  "Quand avez-vous pleuré devant quelqu’un pour la dernière fois ? Tout seul ?",
  "Dites à votre partenaire une chose que vous aimez déjà chez lui.",
  "De quoi ne peut-on pas rire ?",
  "Si vous deviez mourir ce soir sans l’opportunité de communiquer avec qui que ce soit, que regretteriez-vous le plus de ne pas avoir dit ? Pourquoi ne pas leur avoir dit encore ?",
  "Votre maison, contenant tout ce qui vous appartient, prend feu. Après avoir sauvé votre famille et vos animaux de compagnie, vous avez le temps de récupérer en toute sécurité une chose uniquement. Laquelle serait-elle ? Pourquoi ?",
  "De tous les membres de votre famille, la mort de qui vous toucherait-elle le plus ? Pourquoi ? ",
  "Partagez un problème personnel et demandez à votre partenaire comment il le gérerait. Demandez également à votre partenaire de vous dire comment il pense que vous vous sentez par rapport à ce problème.",
  "Regardez votre partenaire dans les yeux en silence pendant 4 minutes."

];



let index = 0;



app.get("/", function (req, res) {

    index = 0;

    res.render("index", {
      valueButton: "Start"
    });
  
});





app.post("/", function (req, res){


  let question = "";

  if(index == 37){
    res.redirect("/");
  }

  else{
    question = questions[index];

    if( index == 36){
      res.render("questions", {
        i: "Bonus",
        question: question
      });
    }
    else{
      res.render("questions", {
        i: index+1 + ".",
        question: question
      });
    }
    

    index++;
  }

  
});





let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started successfully");
})