'use strict';

var util = require('util');

function TenantNotFoundError(host) {
	this.name = 'TenantNotFoundError';
	this.message = 'Tenant not found for host "' + host + '"';

	Error.captureStackTrace(this, this.constructor);
}
util.inherits(TenantNotFoundError, Error);

function TenantIdNotFoundError(tenantId) {
	this.name = 'TenantIdNotFoundError';
	this.message = 'Tenant not found with id "' + tenantId + '"';

	Error.captureStackTrace(this, this.constructor);
}
util.inherits(TenantIdNotFoundError, Error);

function TenantLookupFailedError(inner) {
	this.name = 'TenantLookupFailedError';
	this.message = 'Tenant lookup failed';
	this.inner = inner;

	if (inner && inner.stack) {
		this.stack = inner.stack;
	} else {
		Error.captureStackTrace(this, this.constructor);
	}
}
util.inherits(TenantLookupFailedError, Error);

function LandlordNotAvailable(host, results) {
	this.name = 'LandlordNotAvailable';
	this.message = 'Landlord not available for host "' + host + '"';
	this.results = results;

	Error.captureStackTrace(this, this.constructor);
}
util.inherits(LandlordNotAvailable, Error);

module.exports = {
	TenantNotFound: TenantNotFoundError,
	TenantIdNotFound: TenantIdNotFoundError,
	TenantLookupFailed: TenantLookupFailedError,
	LandlordNotAvailable: LandlordNotAvailable
};
