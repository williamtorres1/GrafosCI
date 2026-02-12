
function changerobot() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

	    {level: 1, id: '1103118', label: 'Cál. Vetorial e G. Analítica', title: '1103118 CÁLCULO VETORIAL E GEOMETRIA ANALÍTICA', y: -1200},
	    {level: 1, id: '1103177', label: 'Cálculo I', title: '1103177 CÁLCULO DIFERENCIAL E INTEGRAL I', y: -1100},
	    {level: 1, id: 'DSCO00034', label: 'Física e Eletromag', title: 'DSCO00034 FÍSICA APLICADA E ELETROMAGNETISMO', y: -1000},
	    {level: 1, id: 'DSCO00038', label: 'Introdução à E.r', title: '1107248 INTRODUÇÃO À ROBÔTICA', y: -900},
	    {level: 1, id: 'GDINF0107', label: 'Int. a programação', title: 'GDINF0107 INTRODUÇÃO A PROGRAMAÇÃO PARA ENGENHARIA DE COMPUTAÇÃO', y: -800},
	    {level: 1, id: 'GDINF0101', label: 'Lab. de programação', title: 'GDINF0101 LABORATÓRIO DE INTRODUÇÃO A PROGRAMAÇÃO', y: -700},

	    {level: 2, id: '1103178', label: 'Cálculo II', title: '1103178 CÁLCULO DIFERENCIAL E INTEGRAL II', y: -1200},
	    {level: 2, id: 'DINF00080', label: 'OOP', title: 'DINF00080 PROGRAMAÇÃO ORIENTADA A OBJETOS', y: -1100},
	    {level: 2, id: 'DSCO00033', label: 'DESENHO TÉCNICO', title: 'DSCO00033 LABORATÓRIO DE LINGUAGEM DE PROGRAMAÇÃO I', y: -1000},
	    {level: 2, id: 'DSCO00036', label: 'MECÂNICA E DINÂMICA', title: 'DSCO00036 MECÂNICA E DINÂMICA DOS SÓLIDOS', y: -900},
	    {level: 2, id: 'GDCOC0103', label: 'MÉTODOS NUMÉRICOS I', title: 'GDCOC0103 MÉTODOS NUMÉRICOS I', y: -800},
	    {level: 2, id: 'GDSCO0025', label: 'MATERIAIS', title: 'GDSCO0025 MATERIAIS PARA MICRO E NANO TECNOLOGIA', y: -700},
			
			{level: 3, id: '1103180', label: 'Séries Eq. Ordinárias', title: '1103180 SÉRIES E EQUAÇÕES DIFERENCIAIS ORDINÁRIAS', y: -1200},
	    {level: 3, id: '5102009', label: 'ÁLGEBRA LINEAR', title: '5102009 ÁLGEBRA LINEAR COMPUTACIONAL', y: -1100},
	    {level: 3, id: 'DINF00047', label: 'Estrutura de Dados I', title: 'DINF00047 ESTRUTURA DE DADOS E ALGORITMOS I', y: -1000},
	    {level: 3, id: 'DSCO00037', label: 'Eletricidade I', title: 'DSCO00037 CIRCUITOS ELÉTRICOS I', y: -900},
	    {level: 3, id: 'DSCO00039', label: 'Projetos e Mecanismos', title: 'DSCO00039 PROJETOS DE MECANISMOS ROBÓTICOS', y: -800},
	    {level: 3, id: 'GDSCO0021', label: 'CL I', title: 'GDSCO0021 CIRCUITOS LÓGICOS I', y: -700},

	    {level: 4, id: 'DSCO00035', label: 'Mecânica dos Fluidos', title: 'DSCO00035 MECÂNICA DOS FLUIDOS EM ROBÓTICA', y: -1200},
	    {level: 4, id: 'DSCO00041', label: 'Cinemática de Robôs', title: 'DSCO00041 CINEMÁTICA E DINÂMICA DE ROBÔS MÓVEIS', y: -1100},
	    {level: 4, id: 'GDSCO0022', label: 'CL II', title: 'GDSCO0022	CIRCUITOS LOGICOS II', y: -1000},
	    {level: 4, id: 'GDSCO0026', label: 'Eletrônica I', title: 'GDSCO0026 ELETRÔNICA APLICADA I', y: -900},
	    {level: 4, id: 'GDSCO0062', label: 'Redes I', title: 'GDSCO0062 REDES DE COMPUTADORES I', y: -800},
			{level: 4, id: 'GDSCO0064', label: 'Sinais e Sistmas', title: 'GDSCO0064 SINAIS E SISTEMAS DINÂMICOS', y: -700},


	    {level: 5, id: '5102006', label: 'Probabilidades', title: '5102006 CÁLCULO DAS PROBABILIDADES I', y: -1200},
	    {level: 5, id: 'DSCO00022', label: 'Sistemas Distribuídos', title: 'DSCO00022 SISTEMAS DISTRIBUÍDOS', y: -1100},
	    {level: 5, id: 'DSCO00042', label: 'Fabricação de Robôs', title: 'DSCO00042	FABRICAÇÃO E PROTOTIPAGEM DE ROBÔS', y: -1000},
	    {level: 5, id: 'DSCO00047', label: 'Sensores e Atuadores', title: 'DSCO00047 SENSORES E ATUADORES PARA ROBÓTICA', y: -900},
	    {level: 5, id: 'GDSCO0027', label: 'Eletrônica', title: 'GDSCO0027 ELETRONICA APLICADA II', y: -800},
	    {level: 5, id: 'GDSCO0065', label: 'Sistemas e Controle', title: 'GDSCO0065 SISTEMAS E CONTROLE DE AUTOMAÇÃO', y: -700},

	    {level: 6, id: '5101003', label: 'Microcontroladores', title: '5101003 MICROCONTROLADORES', y: -1200},
	    {level: 6, id: 'DCOC00069', label: 'Visão Computacional', title: 'DCOC00069 VISÃO COMPUTACIONAL ', y: -1100},
	    {level: 6, id: 'DINF00049', label: 'Programação Concorrente', title: 'DINF00049	PROGRAMAÇÃO CONCORRENTE E DISTRIBUÍDA', y: -1000},
	    {level: 6, id: 'DSCO00043', label: 'Navegação de Robôs', title: 'DSCO00043 NAVEGAÇÃO DE ROBÔS MÓVEIS', y: -900},
	    {level: 6, id: 'GDCOC0104', label: 'IA', title: 'GDCOC0104 INTRODUÇÃO A INTELIGÊNCIA ARTIFICIAL', y: -800},

	    {level: 7, id: '1107128', label: 'Eng. de Software', title: '1107128 ENGENHARIA DE SOFTWARE', y: -1200},
	    {level: 7, id: 'DSCO00045', label: 'Proj. Integrado I', title: 'DSCO00045 PROJETO INTEGRADO EM ROBÓTICA I', y: -1100},
	    {level: 7, id: 'DSCO00048', label: 'Sistemas Embarcados', title: 'DSCO00048 SISTEMAS EMBARCADOS PARA ROBÓTICA', y: -1000},
	    {level: 7, id: 'DSCO00050', label: 'Robótica Probabilística', title: 'DSCO00050 ROBÓTICA PROBABILÍSTICA', y: -900},
	    {level: 7, id: 'GDCOC0092', label: 'Aprend. de Máquina', title: 'GDCOC0092 APRENDIZAGEM DE MÁQUINA', y: -800},

	    {level: 8, id: 'DCOC00068', label: 'Sist. Multiagentes', title: 'DCOC00068 SISTEMAS MULTIAGENTES', y: -1200},
	    {level: 8, id: 'DSCO00044', label: 'Manipuladores', title: 'DSCO00044 MANIPULADORES ROBÓTICOS', y: -1100},
	    {level: 8, id: 'DSCO00046', label: 'Proj. Integrado II', title: 'DSCO00046 PROJETO INTEGRADO EM ROBÓTICA II', y: -900},	    
	    {level: 8, id: 'GDCOC0094', label: 'Apren. Profundo', title: 'GDCOC0094 APRENDIZADO PROFUNDO', y: -1000},

	    {level: 9, id: 'DINF00081', label: 'Apren. por Reforço', title: 'DINF00081 APRENDIZAGEM POR REFORÇO', y: -1200},
	    {level: 9, id: 'DSCO00023', label: 'Empreendedorismo', title: 'DSCO00023 INOVAÇÃO DE BASE CIENTÍFICA-TECNOLÓGICA E EMPREENDEDORISMO', y: -1100},
	    {level: 9, id: 'DSCO00049', label: 'Sistemas Multi-Robôs', title: 'DSCO00049 SISTEMAS MULTI-ROBÔS', y: -1000},
	    {level: 9, id: 'DSCO00058', label: 'Metodologia', title: 'DSCO00058 METODOLOGIA CIENTÍFICA E PESQUISA PARA ENGENHARIA ROBÓTICA', y: -900},

	    {level: 10, id: 'DSCO00060', label: 'TCC', title: 'DSCO00060 TRABALHO DE CONCLUSÃO DE CURSO', y: -1200},
	    {level: 10, id: 'DSCO00061', label: 'Estágio', title: 'DSCO00061 ESTAGIO SUPERVISIONADO', y: -1100},
    ]);

    window.edgesSet = new vis.DataSet([

	    {to: '1103178', from: '1103177'},
	    {to: '1103178', from: '1103118'},
	    {to: 'DINF00080', from: 'GDINF0101'},
	    {to: 'DINF00080', from: 'GDINF0107'},
	    {to: 'DSCO00036', from: 'DSCO00034'},
	    {to: 'DSCO00036', from: '1103177'},
	    {to: 'DSCO00036', from: '1103118'},
	    {to: 'GDCOC0103', from: '1103177'},
	    {to: 'GDCOC0103', from: 'GDINF0107'},

	    {to: '1103180', from: '1103178'},
	    {to: '5102009', from: '1103118'},
	    {to: '5102009', from: '1103118'},
	    {to: 'DINF00047', from: 'DINF00080'},
	    {to: 'DSCO00037', from: '1103177'},
	    {to: 'DSCO00037', from: 'DSCO00034'},
			{to: 'DSCO00039', from: 'DSCO00033'},
			{to: 'DSCO00039', from: 'DSCO00036'},

			{to: 'DSCO00035', from: 'DSCO00036'},
			{to: 'DSCO00041', from: '5102009'},
			{to: 'DSCO00041', from: 'DSCO00038'},
			{to: 'DSCO00041', from: 'DSCO00039'},
			{to: 'GDSCO0022', from: 'GDSCO0021'},
			{to: 'GDSCO0026', from: 'DSCO00037'},
			{to: 'GDSCO0062', from: 'DINF00047'},
			{to: 'GDSCO0064', from: '1103180'},	    

			{to: '5102006', from: '1103177'},
			{to: 'DSCO00022', from: 'GDSCO0062'},
			{to: 'DSCO00042', from: 'GDSCO0025'},
			{to: 'DSCO00042', from: 'DSCO00041'},
			{to: 'DSCO00042', from: 'DSCO00035'},
			{to: 'DSCO00047', from: 'GDSCO0026'},
			{to: 'DSCO00047', from: 'GDSCO0022'},
			{to: 'GDSCO0027', from: 'GDSCO0026'},
			{to: 'GDSCO0065', from: '5102009'},
			{to: 'GDSCO0065', from: 'DSCO00038'},
			{to: 'GDSCO0065', from: 'GDSCO0064'},

			{to: '5101003', from: 'GDCOC0103'},
			{to: '5101003', from: 'GDSCO0027'},
			{to: 'DCOC00069', from: '5102009'},
			{to: 'DCOC00069', from: 'GDSCO0064'},
			{to: 'DINF00049', from: 'DSCO00022'},
			{to: 'DSCO00043', from: 'DSCO00047'},
			{to: 'DSCO00043', from: 'DSCO00041'},
			{to: 'DSCO00043', from: 'GDSCO0065'},
			{to: 'DSCO00043', from: 'DSCO00042'},
			{to: 'GDCOC0104', from: '5102009'},
			{to: 'GDCOC0104', from: 'DINF00047'},

			{to: '1107128', from: 'DINF00047'},
			{to: 'DSCO00045', from: 'GDSCO0065'},
			{to: 'DSCO00045', from: '5101003'},
			{to: 'DSCO00045', from: 'GDCOC0104'},
			{to: 'DSCO00045', from: 'DSCO00042'},
			{to: 'DSCO00048', from: '5101003'},
			{to: 'DSCO00050', from: '5102006'},
			{to: 'DSCO00050', from: 'DSCO00043'},
			{to: 'GDCOC0092', from: 'GDCOC0104'},

			{to: 'DCOC00068', from: 'DINF00049'},
			{to: 'DSCO00044', from: 'DSCO00041'},
			{to: 'DSCO00044', from: 'DSCO00042'},
			{to: 'DSCO00046', from: 'DSCO00045'},
			{to: 'DSCO00046', from: 'DSCO00048'},
			{to: 'DSCO00046', from: 'DSCO00068'},
			{to: 'GDCOC0094', from: 'GDCOC0092'},

			{to: 'DINF00081', from: 'GDCOC0094'},
			{to: 'DSCO00049', from: 'DCOC00068'},
			{to: 'DSCO00049', from: 'DSCO00050'},

		]);
    data2 = {
        nodes: nodesSet,
        edges: edgesSet,
    }
    network.setData(data2);
    nodesSet.forEach(function (node) {
        var edges = edgesSet.get({ returnType: 'Object' });
        var connEdges = network.getConnectedEdges(node.id);

        for (j = 0; j < connEdges.length; j++) {
            if (edges[connEdges[j]].to == node.id
                && taken[edges[connEdges[j]].from] != true) {
                available[node.id] = false;
                node.color = red;
                nodesSet.update(node);
                return;
            }
        }

        available[node.id] = true;
        if(taken[node.id]==true)
            node.color = green;
        else
            node.color = blue;

        nodesSet.update(node);
    });
    document.getElementById("curso").innerHTML = "Engenharia da Robôs";
	var options = {
		position: { x: -40, y: -850 },
		scale: 0.7,
	  };

	network.moveTo(options);
}
