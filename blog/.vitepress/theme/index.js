import DefaultTheme from 'vitepress/theme-without-fonts'
import './css/custom.css'
import ArticleCard from "./components/ArticleCard.vue";
import CardContainer from "./components/CardContainer.vue";

export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
        ctx.app.component('ArticleCard', ArticleCard);
        ctx.app.component('CardContainer', CardContainer);
    }
}