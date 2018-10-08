function afficher(){
  var lastName = document.getElementById('nom').value;
  var firstName = document.getElementById('prenom').value;
  var city = document.getElementById('ville').value;
  var result = 'Nom : ' + lastName + '\n' + 'Prénom : ' + firstName + '\n' + 'Ville : ' + city;
  // Vérifications
    if(isNaN(lastName) && isNaN(firstName) && isNaN(city)){
      alert(result);
    }else{
      alert('Veuillez renseigner les champs correctement !');
    }
}
