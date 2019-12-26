
import Question from './views/main.vue';
import { Button, Row } from 'element-ui';
import 'element-ui/lib/theme-chalk/button.css';
import 'element-ui/lib/theme-chalk/row.css';

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(Question.name, Question);
    window.Vue.use(Button);
    window.Vue.use(Row);
}

Question.install = function (Vue) {
    console.log('question组件---install');
    Vue.component(Question.name, Question);
    Vue.use(Button);
    Vue.use(Row);
};

export default Question;

