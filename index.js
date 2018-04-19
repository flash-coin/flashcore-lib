'use strict';

var flashcore = module.exports;

// module information
flashcore.version = 'v' + require('./package.json').version;
flashcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of flashcore-lib found. ' +
      'Please make sure to require flashcore-lib and check that submodules do' +
      ' not also include their own flashcore-lib dependency.';
    throw new Error(message);
  }
};
flashcore.versionGuard(global._flashcore);
global._flashcore = flashcore.version;

// crypto
flashcore.crypto = {};
flashcore.crypto.BN = require('./lib/crypto/bn');
flashcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
flashcore.crypto.Hash = require('./lib/crypto/hash');
flashcore.crypto.Random = require('./lib/crypto/random');
flashcore.crypto.Point = require('./lib/crypto/point');
flashcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
flashcore.encoding = {};
flashcore.encoding.Base58 = require('./lib/encoding/base58');
flashcore.encoding.Base58Check = require('./lib/encoding/base58check');
flashcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
flashcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
flashcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
flashcore.util = {};
flashcore.util.buffer = require('./lib/util/buffer');
flashcore.util.js = require('./lib/util/js');
flashcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
flashcore.errors = require('./lib/errors');

// main bitcoin library
flashcore.Address = require('./lib/address');
flashcore.Block = require('./lib/block');
flashcore.MerkleBlock = require('./lib/block/merkleblock');
flashcore.BlockHeader = require('./lib/block/blockheader');
flashcore.HDPrivateKey = require('./lib/hdprivatekey.js');
flashcore.HDPublicKey = require('./lib/hdpublickey.js');
flashcore.Networks = require('./lib/networks');
flashcore.Opcode = require('./lib/opcode');
flashcore.PrivateKey = require('./lib/privatekey');
flashcore.PublicKey = require('./lib/publickey');
flashcore.Script = require('./lib/script');
flashcore.Transaction = require('./lib/transaction');
flashcore.URI = require('./lib/uri');
flashcore.Unit = require('./lib/unit');

// dependencies, subject to change
flashcore.deps = {};
flashcore.deps.bnjs = require('bn.js');
flashcore.deps.bs58 = require('bs58');
flashcore.deps.Buffer = Buffer;
flashcore.deps.elliptic = require('elliptic');
flashcore.deps.scryptsy = require('scryptsy');
flashcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
flashcore.Transaction.sighash = require('./lib/transaction/sighash');
