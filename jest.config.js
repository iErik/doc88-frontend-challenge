module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '@mixins(.*)$': '<rootDir>/src/mixins/$1',
    '@common(.*)$': '<rootDir>/src/components/Common/$1',
    '@components(.*)$': '<rootDir>/src/components/$1',
    //'@(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js'
  }
};
