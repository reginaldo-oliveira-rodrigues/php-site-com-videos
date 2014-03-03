var links_de_videos = "";
var player_comum = "";
var fonte_do_objeto_video = "";
var video = "";
var seta_direita = "";
var seta_esquerda = "";

$(document).ready(function(){
	// links_de_videos = get_conjunto_de_videos();
	links_de_videos = get_conjunto_de_videos_formato_fechado( get_conjunto_de_videos() );
	
	player_comum = $("#player-comum");
	fonte_do_objeto_video = $("#fonte-do-objeto-video");
	video = $("#objeto-video");
	seta_direita = $("#seta-direita");
	seta_esquerda = $("#seta-esquerda");
	
	caregar_video_em_formato_fechado( links_de_videos[0], video, fonte_do_objeto_video );
	configurar_cliques_nas_setas();
});

function configurar_cliques_nas_setas(){
	seta_direita.click(function(evento){
		evento.preventDefault();
		var url_proximo_video = get_proximo_ou_primeiro( links_de_videos );
		//caregar_video_em_formato_fechado( url_proximo_video,  video, fonte_do_objeto_video );
		trocar_video_fechado(url_proximo_video);
	});
	
	seta_esquerda.click(function(evento){
		evento.preventDefault();
		var url_proximo_video = get_anterior_ou_ultimo( links_de_videos );
		trocar_video_fechado(url_proximo_video);
	});
}

function get_proximo_ou_primeiro( links_de_videos ){
	var url_video = fonte_do_objeto_video.val();
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
	var url_video = fonte_do_objeto_video.val();
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

function trocar_video_fechado(url_proximo_video){
	player_comum.fadeOut("fast");
	
	//caregar_video( url_proximo_video, $("#video-web"), $("#fonte-do-video") );
	caregar_video_em_formato_fechado( url_proximo_video,  video, fonte_do_objeto_video );
	player_comum.fadeIn("slow");
}




function get_conjunto_de_videos_formato_fechado(links_de_videos){
	var links_de_videos_formato_fechado = new Array();
	var indice_videos_formato_fechado = 0;
	
	for(var cont = 0; cont < links_de_videos.length; cont++){
		if( !contem_expressao( ".mp4", links_de_videos[cont] ) && !contem_expressao( ".ogg", links_de_videos[cont] ) ){
			links_de_videos_formato_fechado[ indice_videos_formato_fechado ] = links_de_videos[cont];
			indice_videos_formato_fechado++;
		}
	}
	return links_de_videos_formato_fechado;
}