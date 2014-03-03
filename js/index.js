var links_de_videos = "";

$(document).ready(function(){
	links_de_videos = get_conjunto_de_videos();
	caregar_video( links_de_videos[0], $("#video-web"), $("#fonte-do-video") );
	configurar_cliques_nas_setas();
});

function configurar_cliques_nas_setas(){
	$("#seta-direita").click(function(evento){
		var url_proximo_video = get_proximo_ou_primeiro( links_de_videos );
		trocar_video(url_proximo_video);
	});
	
	$("#seta-esquerda").click(function(evento){
		var url_proximo_video = get_anterior_ou_ultimo( links_de_videos );
		trocar_video(url_proximo_video);
	});
}

function get_proximo_ou_primeiro( links_de_videos ){
	var url_video = $("#fonte-do-video").attr("src");
	for(var cont = 0; cont < links_de_videos.length; cont++){
		if(links_de_videos[cont] == url_video){
			// se eh o ultimo video, retorna o primeiro video
			if( cont + 1 ==  links_de_videos.length ){
				return links_de_videos[0];
			}else{
				return links_de_videos[ cont + 1 ];
			}
		}
	}
}

function get_anterior_ou_ultimo( links_de_videos ){
	var url_video = $("#fonte-do-video").attr("src");
	for(var cont = 0; cont < links_de_videos.length; cont++){
		if(links_de_videos[cont] == url_video){
			// se eh o primeiro video, retorna o ultimo video
			if( cont - 1 < 0 ){
				return links_de_videos[ links_de_videos.length - 1 ];
			}else{
				return links_de_videos[ cont - 1 ];
			}
		}
	}
}

function trocar_video(url_proximo_video){
	$("#video-web").fadeOut("fast");
	caregar_video( url_proximo_video, $("#video-web"), $("#fonte-do-video") );
	$("#video-web").fadeIn("slow");
}
