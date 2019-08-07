<script>			
			document.getElementById('file').onchange = function(){
				var file = this.files[0];	
				var reader = new FileReader();				
				$('#mainportion').hide();
				reader.onload = function(progressEvent){					
					var lines = this.result.split('\n');					
					for(var line = 1; line < lines.length-1; line++){
						var cells = lines[line].split(',');
						for(var cell = 0; cell < cells.length; cell++ ){								
							console.log(cells[5]);
							var cardGenrator = '<div class="col-sm-4 col-xs-12"><div class="card" style="width: 18rem;"><img style="width: 300px;height: 210px;"class="card-img-top" src='+cells[5]+'alt="Card image cap"><div class="card-body"><h5 class="card-title">'+cells[0]+
							'</h5><h5 class="card-title">'+cells[4]+'</h5><p class="card-text">'+ cells[6]+'</p><p><a href="">'+ cells[3]+'</a></p><p class="card-text">'+ cells[7]+'</p><p class="card-text">'+ cells[16]+'</p><p class="card-text">'+ cells[9]+'</p><p class="card-text">'+ cells[10]+'</p><p class="card-text">'+ cells[11]+'</p><p class="card-text">'+ cells[12]+'</p><p class="card-text">'+ cells[19]+'</p><p class="card-text">'+ cells[13]+'</p><p class="card-text">'+ cells[14]+'</p><p class="card-text">'+ cells[15]+'</p><p class="card-text">'+ cells[17]+'</p></div></div><div>';																	
						}										
						$("#fileContents").append(cardGenrator);
					}
				};
				reader.readAsText(file);
			};
		</script>