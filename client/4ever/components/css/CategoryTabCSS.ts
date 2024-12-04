import { StyleSheet } from 'react-native';

const categoryTabCSS = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#178591', // Fundo azul da tab
        height: 50, // Altura total da barra de tabs
        justifyContent: 'center'
    },
    scrollContainer: {
        alignItems: 'center',
    },
    tab: {
        marginHorizontal: 15,
        alignItems: 'center',
    },
    tabText: {
        color: '#FFFFFF', // Cor do texto branco
        fontSize: 16,
        fontWeight: '500',
    },
    selectedTabText: {
        fontWeight: '700', // Destaque para o texto da aba ativa
    },
    underlineContainer: {
        position: 'absolute',
        bottom: -10, // Coloca o risco fora do fundo azul
        alignItems: 'center',
        width: '100%', // Garante alinhamento com o texto
    },
    underline: {
        height: 3,
        backgroundColor: '#FFFFFF', // Mesma cor do fundo azul para o risco
        width: '80%', // Ligeiramente menor que o texto
    },
});
export default categoryTabCSS;