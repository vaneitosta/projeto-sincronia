# SINCRONIA

Site estático de mensagens para reflexão, com 100 mensagens locais, 12 atmosferas mensais e três temas adicionais.

Site oficial: https://vaneitosta.github.io/projeto-sincronia/

## Estado atual — 28/10/2026

- Tela principal dedicada à mensagem; controles de configurações, temas, som e informações no cabeçalho.
- Cartões JPEG gerados no aparelho, em três formatos, com download e duas modalidades de compartilhamento.
- Imagem, texto e link podem ser separados pelo aplicativo de destino. A imagem não se torna um link clicável; a prévia de link é institucional e fixa.
- Modo Ultra com luz ambiente sutil. Economia de dados, redução de movimento e alto contraste têm prioridade.
- Sem cadastro, backend próprio, cookies de rastreamento ou analytics no código atual. Preferências ficam no navegador.

## Revisão de sincronização

Se mensagem, tema ou qualidade mudarem durante um compartilhamento pendente, o painel é regenerado ao terminar ou cancelar. O conteúdo do envio já iniciado é preservado. Fechar o painel durante o envio não o reabre automaticamente.

Cartões agora usam fundo pequeno na qualidade Econômica, ultraleve quando o navegador informa economia de dados, e grande nos demais níveis. A imagem exportada mantém suas dimensões. O nome Ultra aparece de forma consistente nas opções e avisos. A geração de SVG decorativo oculto foi removida.

## Estrutura e fonte de trabalho

Nesta máquina, a fonte funcional atual é `sincronia-revisao/`. `sincronia-publicacao/` é cópia de preparação de envio. A pasta antiga `Projeto Sincronia` é histórica e pode conter mudanças próprias: não sobrescrever, apagar ou publicar a partir dela sem comparação.

Arquivos de execução: `index.html`, `css/styles.css`, `js/main.js`, `js/cards.js` e `assets/`. O endereço dos três arquivos versionados no HTML deve mudar em cada atualização de execução para evitar misturar versões em cache.

Para testar, servir esta pasta via HTTP local e abrir em um navegador. Para recursos dependentes de contexto seguro, usar localhost ou HTTPS. Abrir o HTML diretamente como arquivo não equivale ao teste público.

## Verificação e publicação

Os testes auxiliares ficam na pasta de trabalho acima desta fonte: `teste-regressao-sincronizacao.cjs`, `teste-cartoes.cjs`, `teste-controles.cjs`, `teste-rolagem.cjs`, `teste-seguranca.cjs` e `teste-todas-mensagens-cartoes.cjs`. Exigem Node.js e Playwright; os caminhos de runtime dos scripts são específicos deste ambiente e devem ser ajustados em outra máquina.

Publicação atual: GitHub Pages a partir da branch principal do repositório. Enviar os recursos antes do HTML que os referencia, aguardar o deployment e comparar os arquivos públicos com os locais. Os relatórios históricos descrevem etapas anteriores; este README é a referência resumida atual. A análise detalhada de 28/10 é um retrato anterior às correções de sincronização, com encerramento registrado em `ATUALIZACAO-SINCRONIZACAO-2026-10-28.md`.

## Limites de validação

Os testes automatizados de navegador usam Chrome/Edge com perfis emulados. Não equivalem a Safari real, VoiceOver, TalkBack ou NVDA. Entrega em aplicativos sociais e qualidade do áudio real precisam de verificação no aparelho. Arquivos 4K/8K são ampliações por reamostragem, não detalhe nativo adicional. Não houve certificação WCAG, auditoria da conta GitHub ou benchmark de GPU em 8K físico.
