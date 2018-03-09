var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({
    host: 'https://487499c0kq:ep2fs0tlq9@knowledge-keeper-7477570439.us-east-1.bonsaisearch.net',
    log: 'error'
});

var indexName = 'resumes';

function indexExists() {
    return elasticClient.indices.exists({
        index: indexName
    });
}
exports.indexExists = indexExists;

function initIndex() {
    return elasticClient.indices.create({
        index: indexName
    });
}
exports.initIndex = initIndex;

function deleteIndex() {
    return elasticClient.indices.delete({
        index: indexName
    });
}
exports.deleteIndex = deleteIndex;

function initMapping() {  
    return elasticClient.indices.putMapping({
        index: indexName,
        type: "document",
        body: {
            properties: {
                title: { type: "text" },
                subtitle: { type: "text" },
                content: { type: "text" }
            }
        }
    });
}
exports.initMapping = initMapping;

function addDocument(document) {  
    return elasticClient.index({
        index: indexName,
        type: "document",
        body: {
            title: document.title,
            subtitle: document.subtitle,
            content: document.content
        }
    });
}
exports.addDocument = addDocument;