// PARTIE 1:
var menu = [{ category : "Animaux" ,
				 items : ["Garde d'animaux", "Promenade d'animaux","Soin d'animaux"]
			},
			{ category : "Automobile et 2 roues" ,
		         items : ["Carrosserie et peinture auto", "Covoiturage","Dépannage et diagnostic auto","Mécanicien et garagiste"]
			},
			{ category : "Informatique et web" ,
			     items : ["Dépannage et réparation informatique", "Montage photo et vidéo", "Webmastering"]	      
			}];


/* Générez à partir de la variable menu le code html ci-dessous:

<ul>
	<li>Animaux (3)</li>
	<li>
		<ul>
			<li>Garde d'animaux</li>
			<li>Promenade d'animaux</li>
			<li>Soin d'animaux</li>
		</ul>
	</li>
	<li><trong>Automobile et 2 roues (4)</strong></li>
	<li>
		<ul>
			<li>Carrosserie et peinture auto</li>
			<li>Covoiturage</li>
			<li>Dépannage et diagnostic auto</li>
			<li>Mécanicien et garagiste</li>
		</ul>
	</li>
	<li><strong>Informatique et web (3)</strong></li>
	<li>
		<ul>
			<li>Dépannage et réparation informatique</li>
			<li>Montage photo et vidéo</li>
			<li>Webmastering</li>
		</ul>
	</li>
</ul>


*/




// PARTIE 2:

menu = [{ category : "Animaux" ,
				 items : ["Garde d'animaux", "Promenade d'animaux","Soin d'animaux"]
			},
			{ category : "Automobile et 2 roues" ,
		         items : ["Carrosserie et peinture auto", "Covoiturage","Dépannage et diagnostic auto","Mécanicien et garagiste"]
			},
			{ category : "Informatique et web" ,
			     items : ["Dépannage et réparation informatique", 
					      "Montage photo et vidéo", 
					      { category : "Webmastering" ,
						    items : ["Intégrateur web", "Développement web","Référencement","Infographisme"]
					      }]
			}];



/* Générez à partir de la variable menu le code html ci-dessous:

<ul>
	<li>Animaux (3)</li>
	<li>
		<ul>
			<li>Garde d'animaux</li>
			<li>Promenade d'animaux</li>
			<li>Soin d'animaux</li>
		</ul>
	</li>
	<li><trong>Automobile et 2 roues (4)</strong></li>
	<li>
		<ul>
			<li>Carrosserie et peinture auto</li>
			<li>Covoiturage</li>
			<li>Dépannage et diagnostic auto</li>
			<li>Mécanicien et garagiste</li>
		</ul>
	</li>
	<li><strong>Informatique et web (3)</strong></li>
	<li>
		<ul>
			<li>Dépannage et réparation informatique</li>
			<li>Montage photo et vidéo</li>
			<li>
				<ul>
					<li>Intégrateur web</li>
					<li>Développement web</li>
					<li>Référencement</li>
					<li>Infographisme</li>
				</ul>
			</li>
		</ul>
	</li>
</ul>


*/

