module.exports = {
    plugins: [
        'cleanupAttrs',
        'removeDoctype',
        'removeXMLProcInst',
        'removeComments',
        'removeMetadata',
        'removeTitle',
        'removeDesc',
        'removeUselessDefs',
        'removeEditorsNSData',
        'removeEmptyAttrs',
        'removeHiddenElems',
        'removeEmptyText',
        'removeEmptyContainers',
        // 'removeViewBox',
        'cleanupEnableBackground',
        'convertStyleToAttrs',
        'convertColors',
        'convertPathData',
        'convertTransform',
        'removeUnknownsAndDefaults',
        'removeNonInheritableGroupAttrs',
        'removeUselessStrokeAndFill',
        'removeUnusedNS',
        'cleanupIDs',
        'cleanupNumericValues',
        'moveElemsAttrsToGroup',
        'moveGroupAttrsToElems',
        'collapseGroups',
        // 'removeRasterImages',
        'mergePaths',
        'convertShapeToPath',
        // 'sortAttrs',
        'removeDimensions',
        // 'removeOffCanvasPaths',
        'removeStyleElement',
        'removeScriptElement',
        'removeXMLNS',
        { name: 'removeAttrs', params: { attrs: '(stroke|fill|class)' } },
    ],
};