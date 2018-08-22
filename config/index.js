/* eslint-disable import/no-commonjs */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  projectName: 'taro-ui',
  designWidth: 750,
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    },
    typescript: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        baseUrl: '.',
        declaration: false,
        experimentalDecorators: true,
        jsx: 'react',
        jsxFactory: 'Nerv.createElement',
        module: 'commonjs',
        moduleResolution: 'node',
        noImplicitAny: false,
        noUnusedLocals: true,
        outDir: './dist/',
        preserveConstEnums: true,
        removeComments: false,
        rootDir: '.',
        sourceMap: true,
        strictNullChecks: true,
        target: 'es6'
      },
      include: [
        'src/**/*'
      ],
      exclude: [
        'node_modules'
      ],
      compileOnSave: false
    }
  },
  defineConstants: {
  },
  weapp: {

  },
  h5: {
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}

if (process.env.TARO_BUILD_TYPE === 'component') {
  config.h5.webpack = customConfig => {
    customConfig.output = {
      path: path.join(process.cwd(), 'dist', 'h5'),
      filename: 'index.js',
      libraryTarget: 'umd',
      library: 'taro-ui'
    }
    customConfig.externals = {
      nervjs: 'commonjs2 nervjs',
      classnames: 'commonjs2 classnames',
      '@tarojs/components': 'commonjs2 @tarojs/components',
      '@tarojs/taro-h5': 'commonjs2 @tarojs/taro-h5',
      'weui': 'commonjs2 weui'
    }
    customConfig.plugins.splice(1)
    customConfig.plugins[0] = new MiniCssExtractPlugin({
      filename: 'css/index.css',
      chunkFilename: 'css/[id].css'
    })

    const copySassLoader = { ...customConfig.module.rules[1].oneOf[0] }
    copySassLoader.use = [...copySassLoader.use]
    delete copySassLoader.exclude
    copySassLoader.include = [
      path.resolve(__dirname, '..', './.temp/components/article/index.scss'),
      path.resolve(__dirname, '..', './.temp/components/flex/index.scss'),
      path.resolve(__dirname, '..', './.temp/components/flex/item/index.scss')
    ]
    customConfig.module.rules[1].oneOf.forEach(item => item.use.splice(0, 1, require.resolve('style-loader')))
    customConfig.module.rules[1].oneOf.unshift(copySassLoader)

    return customConfig
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
