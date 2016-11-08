			$('#searchCategory').keyup(function(){
					
					var searchText = $(this).val().toLowerCase();
					var parentsToShow = [];
				
					
					
					$('#chooseCategory ul > li').each(function(){
						
						var currentLiText = $(this).text().toLowerCase(),
							currentParent = $(this).attr('data-category'),
							showCurrentLi = currentLiText.indexOf(searchText) !== -1;
						
						if(showCurrentLi) parentsToShow.push(currentParent);
						if($(this).next().length != 1) {
							
							var showCurrentParent = parentsToShow.indexOf(currentParent) !== -1;
							
							$('.parent[data-value='+currentParent+']').toggle(showCurrentParent);
					
						}
					
						$(this).toggle(showCurrentLi);
						
						
					});     
				});