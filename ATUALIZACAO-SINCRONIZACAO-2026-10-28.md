# Correções da análise geral — 28/10/2026

## Alterações

- Mudanças de mensagem, tema, contraste ou qualidade solicitadas com o compartilhamento pendente são aplicadas ao painel quando a operação termina, é cancelada ou falha. O conteúdo entregue ao envio já iniciado não é substituído.
- Fechar o painel durante um envio não causa reabertura automática; o próximo acesso gera um cartão atual.
- As duas modalidades de envio usam a mesma liberação de controles e revalidam o suporte a arquivos ao terminar.
- Qualidade Econômica usa a imagem small para gerar cartões; economia de dados informada pelo navegador usa tiny; os demais níveis usam large. Dimensões finais de exportação foram preservadas.
- Mudanças de qualidade e do indicador de economia de dados também atualizam o cartão aberto.
- O aviso de qualidade usa o nome Ultra, consistente com a seleção.
- Removida a geração de SVG que já era oculto pelo CSS. Uma regra de compatibilidade mantém o elemento antigo oculto em abas de revisões anteriores.
- README consolidado como resumo do estado atual, limites, fonte de trabalho e publicação. Cópias históricas e alterações próprias da pasta antiga foram preservadas.

## Evidência específica

A regressão reproduziu os dois modos de compartilhar com conclusão, cancelamento e erro, cruzados com troca de mensagem, tema, qualidade e fechamento do painel: 24 casos. Acrescentados dois testes de economia de imagens e um teste de envio só de link em navegador sem suporte a arquivos. Total: 27 cenários, aprovados.

Testes de cartões/download/cancelamento e dos quatro atalhos em quatro perfis também passaram. Testes de CSP continuam bloqueando script inline, alteração de base, fetch e formulário. As verificações de 300 cartões (100 mensagens em três formatos) e 28 cenários de rolagem em Chrome/Edge também passaram.

## Limites

Compartilhamento nativo simulado nos testes de regressão: nenhuma mensagem foi enviada a redes sociais. A escolha de separar arquivo e texto continua pertencendo ao aplicativo de destino. A prévia do link é institucional, não personalizada por tema ou mensagem. Não houve teste de Safari físico, leitores de tela ou benchmark de 8K nesta revisão.

## Entrega

Versão de recursos: 20261028-sincronizacao. Entrega pelo GitHub Pages; a conferência compara os quatro arquivos públicos com a fonte local e valida a interface publicada.
