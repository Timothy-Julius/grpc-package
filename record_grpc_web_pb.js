/**
 * @fileoverview gRPC-Web generated client stub for com.samsung.datastore.record
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.1
// 	protoc              v3.20.3
// source: grpc/record.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.samsung = {};
proto.com.samsung.datastore = {};
proto.com.samsung.datastore.record = require('./record_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.samsung.datastore.record.RecordServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.samsung.datastore.record.RecordServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.samsung.datastore.record.PutRecordRequest,
 *   !proto.com.samsung.datastore.record.PutRecordResponse>}
 */
const methodDescriptor_RecordService_putRecord = new grpc.web.MethodDescriptor(
  '/com.samsung.datastore.record.RecordService/putRecord',
  grpc.web.MethodType.UNARY,
  proto.com.samsung.datastore.record.PutRecordRequest,
  proto.com.samsung.datastore.record.PutRecordResponse,
  /**
   * @param {!proto.com.samsung.datastore.record.PutRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.samsung.datastore.record.PutRecordResponse.deserializeBinary
);


/**
 * @param {!proto.com.samsung.datastore.record.PutRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.samsung.datastore.record.PutRecordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.samsung.datastore.record.PutRecordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.samsung.datastore.record.RecordServiceClient.prototype.putRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.samsung.datastore.record.RecordService/putRecord',
      request,
      metadata || {},
      methodDescriptor_RecordService_putRecord,
      callback);
};


/**
 * @param {!proto.com.samsung.datastore.record.PutRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.samsung.datastore.record.PutRecordResponse>}
 *     Promise that resolves to the response
 */
proto.com.samsung.datastore.record.RecordServicePromiseClient.prototype.putRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.samsung.datastore.record.RecordService/putRecord',
      request,
      metadata || {},
      methodDescriptor_RecordService_putRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.samsung.datastore.record.GetRecordRequest,
 *   !proto.com.samsung.datastore.record.GetRecordResponse>}
 */
const methodDescriptor_RecordService_getRecord = new grpc.web.MethodDescriptor(
  '/com.samsung.datastore.record.RecordService/getRecord',
  grpc.web.MethodType.UNARY,
  proto.com.samsung.datastore.record.GetRecordRequest,
  proto.com.samsung.datastore.record.GetRecordResponse,
  /**
   * @param {!proto.com.samsung.datastore.record.GetRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.samsung.datastore.record.GetRecordResponse.deserializeBinary
);


/**
 * @param {!proto.com.samsung.datastore.record.GetRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.samsung.datastore.record.GetRecordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.samsung.datastore.record.GetRecordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.samsung.datastore.record.RecordServiceClient.prototype.getRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.samsung.datastore.record.RecordService/getRecord',
      request,
      metadata || {},
      methodDescriptor_RecordService_getRecord,
      callback);
};


/**
 * @param {!proto.com.samsung.datastore.record.GetRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.samsung.datastore.record.GetRecordResponse>}
 *     Promise that resolves to the response
 */
proto.com.samsung.datastore.record.RecordServicePromiseClient.prototype.getRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.samsung.datastore.record.RecordService/getRecord',
      request,
      metadata || {},
      methodDescriptor_RecordService_getRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.samsung.datastore.record.FetchRecordRequest,
 *   !proto.com.samsung.datastore.record.FetchRecordResponse>}
 */
const methodDescriptor_RecordService_fetchRecord = new grpc.web.MethodDescriptor(
  '/com.samsung.datastore.record.RecordService/fetchRecord',
  grpc.web.MethodType.UNARY,
  proto.com.samsung.datastore.record.FetchRecordRequest,
  proto.com.samsung.datastore.record.FetchRecordResponse,
  /**
   * @param {!proto.com.samsung.datastore.record.FetchRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.samsung.datastore.record.FetchRecordResponse.deserializeBinary
);


/**
 * @param {!proto.com.samsung.datastore.record.FetchRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.samsung.datastore.record.FetchRecordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.samsung.datastore.record.FetchRecordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.samsung.datastore.record.RecordServiceClient.prototype.fetchRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.samsung.datastore.record.RecordService/fetchRecord',
      request,
      metadata || {},
      methodDescriptor_RecordService_fetchRecord,
      callback);
};


/**
 * @param {!proto.com.samsung.datastore.record.FetchRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.samsung.datastore.record.FetchRecordResponse>}
 *     Promise that resolves to the response
 */
proto.com.samsung.datastore.record.RecordServicePromiseClient.prototype.fetchRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.samsung.datastore.record.RecordService/fetchRecord',
      request,
      metadata || {},
      methodDescriptor_RecordService_fetchRecord);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.samsung.datastore.record.DeleteRecordRequest,
 *   !proto.com.samsung.datastore.record.DeleteRecordResponse>}
 */
const methodDescriptor_RecordService_deleteRecord = new grpc.web.MethodDescriptor(
  '/com.samsung.datastore.record.RecordService/deleteRecord',
  grpc.web.MethodType.UNARY,
  proto.com.samsung.datastore.record.DeleteRecordRequest,
  proto.com.samsung.datastore.record.DeleteRecordResponse,
  /**
   * @param {!proto.com.samsung.datastore.record.DeleteRecordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.samsung.datastore.record.DeleteRecordResponse.deserializeBinary
);


/**
 * @param {!proto.com.samsung.datastore.record.DeleteRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.samsung.datastore.record.DeleteRecordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.samsung.datastore.record.DeleteRecordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.samsung.datastore.record.RecordServiceClient.prototype.deleteRecord =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.samsung.datastore.record.RecordService/deleteRecord',
      request,
      metadata || {},
      methodDescriptor_RecordService_deleteRecord,
      callback);
};


/**
 * @param {!proto.com.samsung.datastore.record.DeleteRecordRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.samsung.datastore.record.DeleteRecordResponse>}
 *     Promise that resolves to the response
 */
proto.com.samsung.datastore.record.RecordServicePromiseClient.prototype.deleteRecord =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.samsung.datastore.record.RecordService/deleteRecord',
      request,
      metadata || {},
      methodDescriptor_RecordService_deleteRecord);
};


module.exports = proto.com.samsung.datastore.record;

