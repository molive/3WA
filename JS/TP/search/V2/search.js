			$('#searchCategory').keyup(function(){
					
					var searchText = $(this).val().toLowerCase();
					
			
					$('#chooseCategory ul > li').each(function(){
						
						var currentLiText = $(this).text().toLowerCase(),
							showCurrentLi = currentLiText.indexOf(searchText) !== -1;
						
						$(this).toggle(showCurrentLi);
						
					});    
					
					
					// On vérifie si on doit laisser afficher ou non les catégories.

					$('#chooseCategory .parent').each(function(){
						
						if($(this).next().find('li:visible').length != 0) showParent = true;
						else showParent = false;
						
						$(this).toggle(showParent);
						
					});    
					
				});