export default {
    components: {},

    data: function () {
        return {
            //
        }
    },

    props: {
        //
    },

    computed: {
        //
    },

    created () {
        //
    },

    mounted () {
        //
    },

    methods: {
        /**
         * Capitalize the first letter of a string.
         *
         * @param  {String} string
         *
         * @return {String}
         */
        capitalizeFirstLetter (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
};