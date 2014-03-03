// algumas funcoes aqui dependem do jquery

function preencher_combo(combo, valores, rotulos) {
	var opcao_combo = "";
	for (var cont = 0; cont < valores.length; cont++) {
		opcao_combo = "<option value = \"";
		opcao_combo += valores[cont];
		opcao_combo += "\"";

		if (cont == 0) {
			opcao_combo += " selected=\"selected\" ";
		}

		opcao_combo += ">";
		opcao_combo += rotulos[cont];
		opcao_combo += "</option>";
		
		combo.append(opcao_combo);
	}
}

function criar_elemento(elemento){
	var elemento_como_tag = "<" + elemento + "></" + elemento + ">";
	return $(elemento_como_tag);
}

function caregar_video(link_do_video, painel_do_video, fonte_do_video){
	if(contem_expressao( "ogg", link_do_video ) ){
		fonte_do_video.attr( "type",  "video/ogg");
	}else{
		fonte_do_video.attr( "type",  "video/mp4");
	}
	fonte_do_video.attr( "src",  link_do_video);
	painel_do_video.load();
}

function caregar_video_em_formato_fechado(url_proximo_video, objeto_video, fonte_do_objeto_video){
	var tipo_do_video = "video/x-ms-wmv";
	if( contem_expressao( ".mov", url_proximo_video ) ){
		tipo_do_video = "video/quicktime";
	}
	objeto_video.attr("type", tipo_do_video);
	objeto_video.attr("data", url_proximo_video);
	fonte_do_objeto_video.val(url_proximo_video);
	objeto_video.load();
}

// funcoes para avaliar texto ou valores
function contem_expressao( expressao, texto ){
	return (texto.indexOf(expressao) != -1);
}

function estah_definido(elemento){
	return elemento != undefined;
}

function hasvalue(element) {
	return (element.val() != null || element.val() != undefined);
}

