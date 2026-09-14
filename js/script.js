var variável = new Date();
/* criando array global do dia da semana */
var dia_semana = new Array(); //dinâmico com uso do construtor
dia_semana[0] = "um domingo";
dia_semana[1] = "uma segunda-feira";
dia_semana[2] = "uma terça-feira";
dia_semana[3] = "uma quarta-feira";
dia_semana[4] = "uma quinta-feira";
dia_semana[5] = "uma sexta-feira";
dia_semana[6] = "um sábado";
		  
var nome_mes= new Array();
nome_mes[0] = "Janeiro";
nome_mes[1] = "Fevereiro";
nome_mes[2] = "Março";
nome_mes[3] = "Abril";
nome_mes[4] = "Maio";
nome_mes[5] = "Junho";
nome_mes[6] = "Julho";
nome_mes[7] = "Agosto";
nome_mes[8] = "Setembro";
nome_mes[9] = "Outubro";
nome_mes[10] = "Novembro";
nome_mes[11] = "Dezembro";

function calcularIdade()
{
	var d_ani = document.getElementById("txtdia").value;
	var m_ani = document.getElementById("txtmes").value;
	var a_ani = document.getElementById("txtano").value;

	//verificando se o dia está correto
	if (isNaN(d_ani))
		{
			window.alert("Zé Ruela, o dia não pode ser caracter!");
			location.reload(); //equivale a dar um F5 na página
		}
	else if (d_ani=="")
		{
			window.alert("Zé Ruela, dia não pode ficar vazio!");
			location.reload();
		}
	else	
		{
			d_ani = parseInt(d_ani);
			if ((d_ani < 1) || (d_ani > 31))
				{
					window.alert("Zé Ruela, dia deve ser entre 1 e 31!");
					location.reload();
				}
		}

	//verificando se o mês está correto	
	if (isNaN(m_ani))
		{
			window.alert("Zé Ruela, o mês não pode ser caracter!");
			location.reload();
		}
	else if (m_ani == "")
		{
			window.alert("Zé Ruela, o mês não pode ficar vazio!");
			location.reload();
		}
	else 
		{
			m_ani = parseInt(m_ani);
			if ((m_ani < 1) || (m_ani > 12))
				{
					window.alert("Zé Ruela, o mês deve ser entre 1 e 12!");
					location.reload();
				}
		}

		//verificando se o ano está correto
	if (isNaN(a_ani))
		{
			window.alert("Zé Ruela, o ano não pode ser caracter!");
			location.reload();
		}
	else if (a_ani =="")
		{
			window.alert("Zé Ruela, o ano não pode ser vazio!");
			location.reload();
		}
	else if (a_ani.length != 4)
		{
			window.alert("Zé Ruela, digite o ano com 4 dígitos!");
			location.reload();
		}
	else
		{
			a_ani = parseInt(a_ani);
		
			//depois de tudo verificado,instanciando o objeto Date() data do sistema		
			var hoje = new Date();

			var d_hoj = hoje.getDate(); //trouxe o dia do mês atual (do sistema)
			var m_hoj = hoje.getMonth()+1; //trouxe o mes atual (do sistema) correspondente de 0 até 11
			var a_hoj = hoje.getFullYear(); //ano inteiro do sistema para cálculo da idade
			
			if ((d_hoj == d_ani) && (m_hoj == m_ani))
				{	document.getElementById("mensagem").style.visibility="visible";
					document.getElementById("mensagem").innerHTML="P A R A B É N S...";
				}
			//calculando a idade da pessoa   
			var idade = a_hoj - a_ani; //ano completo
		
			if (m_ani > m_hoj)
				idade = idade - 1;
		
			else if ((m_ani == m_hoj) && (d_ani > d_hoj))
				idade = idade - 1;
		
			document.getElementById("txtidade").value=idade;		

			/*carregando os valores do dia, mês e ano de aniversário, 
			nas posições correspondentes do objeto Date()*/

			hoje.setDate(d_ani);
			hoje.setMonth(m_ani-1);
			hoje.setFullYear(a_ani);

			/* demonstrar aos alunos como ele vai obter o dia da semana 
			da data de nascimento, através do método getDay() 
		
			document.getElementById("txtsema").value=hoje.getDay();	*/

			//recebendo o valor numérico referente ao dia da semana informado pelo usuário

			document.getElementById("txtsema").value=dia_semana[hoje.getDay()];
			document.getElementById("txtmext").value=nome_mes[m_ani-1];

			/* Não utilizando Array neste trecho, a quantidade de linhas e comandos aumentam consideravelmente

			if (m_ani == 1)
				document.getElementById("txtmext").value="Janeiro";
			else if (m_ani == 2)
				document.getElementById("txtmext").value="Fevereiro";
			else if (m_ani == 3)
				document.getElementById("txtmext").value="Março";


			switch (m_ani)
			{
				case 1:
				{
					document.getElementById("txtmext").value="Janeiro";
					break;
				}
		
				case 2:
				{
					document.getElementById("txtmext").value="Fevereiro";
					break;
				}

			}
			*/

			if (((d_ani>= 20) && (m_ani== 1)) || ((d_ani<= 18) && (m_ani== 2)))
				document.images["signo"].src="../imagens/aquario.png";
			else if (((d_ani>= 19) && (m_ani== 2)) || ((d_ani<= 20) && (m_ani== 3)))
				document.images["signo"].src="../imagens/peixes.png";
			else if (((d_ani>= 21) && (m_ani== 3)) || ((d_ani<= 19) && (m_ani== 4)))
				document.images["signo"].src="../imagens/aries.png";
			else if (((d_ani>= 20) && (m_ani== 4)) || ((d_ani<= 20) && (m_ani== 5)))
				document.images["signo"].src="../imagens/touro.png";
			else if (((d_ani>= 21) && (m_ani== 5)) || ((d_ani<= 20) && (m_ani== 6)))
				document.images["signo"].src="../imagens/gemeos.png";
			else if (((d_ani>= 21) && (m_ani== 6)) || ((d_ani<= 22) && (m_ani== 7)))
				document.images["signo"].src="../imagens/cancer.png";
			else if (((d_ani>= 23) && (m_ani== 7)) || ((d_ani<= 22) && (m_ani== 8)))
				document.images["signo"].src="../imagens/leao.png";			  
			else if (((d_ani>= 23) && (m_ani== 8)) || ((d_ani<= 22) && (m_ani== 9)))
				document.images["signo"].src="../imagens/virgem.png";	
			else if (((d_ani>= 23) && (m_ani== 9)) || ((d_ani<= 22) && (m_ani== 10)))
				document.images["signo"].src="../imagens/libra.png";	
			else if (((d_ani>= 23) && (m_ani== 10)) || ((d_ani<= 21) && (m_ani== 11)))
				document.images["signo"].src="../imagens/escorpiao.png";	
			else if (((d_ani>= 22) && (m_ani== 11)) || ((d_ani<= 21) && (m_ani== 12)))
				document.images["signo"].src="../imagens/sagitario.png";				  
			else 
				document.images["signo"].src="../imagens/capricornio.png";			   
		} 
}  


