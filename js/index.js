var links_de_videos = "";
var fonte_do_video = "";
var video = "";
	
$(document).ready(function(){
	links_de_videos = get_conjunto_de_videos_formato_aberto_ou_compativel( get_conjunto_de_videos() );
	fonte_do_video = $("#fonte-do-video");
	video = $("#video-web");
	
	caregar_video( links_de_videos[0], video, fonte_do_video );
	configurar_cliques_nas_setas();
});

function configurar_cliques_nas_setas(){
	$("#seta-direita").click(function(evento){
		evento.preventDefault();
		var url_proximo_video = get_proximo_ou_primeiro( links_de_videos );
		trocar_video(url_proximo_video);
	});
	
	$("#seta-esquerda").click(function(evento){
		evento.preventDefault();
		var url_proximo_video = get_anterior_ou_ultimo( links_de_videos );
		trocar_video(url_proximo_video);
	});
}

function get_proximo_ou_primeiro( links_de_videos ){
	var url_video = fonte_do_video.attr( "src");
	var link_do_video = "";
	for(var cont = 0; cont < links_de_videos.length; cont++){
		if(links_de_videos[cont] == url_video){
			// se eh o ultimo video, retorna o primeiro video
			if( cont + 1 ==  links_de_videos.length ){
				link_do_video = links_de_videos[0];
			}else{
				link_do_video = links_de_videos[ cont + 1 ];
			}
			break;
		}
	}
	
	return link_do_video;
}

function get_anterior_ou_ultimo( links_de_videos ){
	var url_video = fonte_do_video.attr( "src");
	var link_do_video = "";
	for(var cont = 0; cont < links_de_videos.length; cont++){
		if(links_de_videos[cont] == url_video){
			// se eh o primeiro video, retorna o ultimo video
			if( cont - 1 < 0 ){
				link_do_video = links_de_videos[ links_de_videos.length - 1 ];
			}else{
				link_do_video = links_de_videos[ cont - 1 ];
			}
			break;
		}
	}
	
	return link_do_video;
}

function trocar_video(url_proximo_video){
	video.fadeOut("fast");
	caregar_video( url_proximo_video, video, fonte_do_video );
	video.fadeIn("slow");
}




function get_conjunto_de_videos_formato_aberto_ou_compativel(links_de_videos){
	var links_de_videos_formato_aberto = new Array();
	var indice_videos_formato_aberto = 0;
	
	for(var cont = 0; cont < links_de_videos.length; cont++){
		if( !contem_expressao( ".wmv", links_de_videos[cont] ) && !contem_expressao( ".mov", links_de_videos[cont] ) ){
			links_de_videos_formato_aberto[ indice_videos_formato_aberto ] = links_de_videos[cont];
			indice_videos_formato_aberto++;
		}
	}
	
	return links_de_videos_formato_aberto;
}
