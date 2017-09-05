// $.ajax ({

// 	url: "http://192.168.1.12:8000/public/secret.json",
// 	success:function(data){
// 		$("#alert").html(data.secret)
// 	},
// 	error:function(){
// 		$('#alert').html("Erreur de chargement")
// 	},
// 	complete:function(){
// 		alert("super")
// 	}

// });
$('#loader').hide();

$( document ).ready(function(){


	//boutn d'envoi d'une requete dans BDD 

	$('#envoyer').click(function(){

		$('#loader').show();

		$.ajax({
			method: "POST",
			url:"http://192.168.1.12:8000/users",
			data: {name:"pol", prenom:"mickael", content:"le survivant de papa ours"},
			
			success:function(){
				$('#message').html("ça fonctionne");
				$('#loader').hide();
			},
			error:function(){
				$('#message').html("ça fonctionne pas");
			},
			complete:function(){
				$('#message1').html("nickel");
			}
		})
	});

	//bouton recuperation content d'un name dans BDD

	$('#recuperer').click(function(){

		$('#loader').show();

		$.ajax({
			method:"GET",
			url: "http://192.168.1.12:8000/users",
			data: {name:"juin"},

			success:function(data){
				$('#recuperation').html(data.content);
				$('#loader').hide();
			},
			error:function(){
				$('#recuperation').html("Erreur!");
			}
		})
	})
});