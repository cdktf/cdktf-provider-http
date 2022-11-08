// https://www.terraform.io/docs/providers/http/d/http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHttpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#ca_cert_pem DataHttp#ca_cert_pem}
  */
  readonly caCertPem?: string;
  /**
  * Disables verification of the server's certificate chain and hostname. Defaults to `false`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#insecure DataHttp#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The HTTP Method for the request. Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#method DataHttp#method}
  */
  readonly method?: string;
  /**
  * The request body as a string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_body DataHttp#request_body}
  */
  readonly requestBody?: string;
  /**
  * A map of request header field names and values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_headers DataHttp#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * The URL for the request. Supported schemes are `http` and `https`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#url DataHttp#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/http/d/http http}
*/
export class DataHttp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "http";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/http/d/http http} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHttpConfig
  */
  public constructor(scope: Construct, id: string, config: DataHttpConfig) {
    super(scope, id, {
      terraformResourceType: 'http',
      terraformGeneratorMetadata: {
        providerName: 'http',
        providerVersion: '3.2.1',
        providerVersionConstraint: '~> 3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCertPem = config.caCertPem;
    this._insecure = config.insecure;
    this._method = config.method;
    this._requestBody = config.requestBody;
    this._requestHeaders = config.requestHeaders;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // ca_cert_pem - computed: false, optional: true, required: false
  private _caCertPem?: string; 
  public get caCertPem() {
    return this.getStringAttribute('ca_cert_pem');
  }
  public set caCertPem(value: string) {
    this._caCertPem = value;
  }
  public resetCaCertPem() {
    this._caCertPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertPemInput() {
    return this._caCertPem;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // response_body - computed: true, optional: false, required: false
  public get responseBody() {
    return this.getStringAttribute('response_body');
  }

  // response_headers - computed: true, optional: false, required: false
  private _responseHeaders = new cdktf.StringMap(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert_pem: cdktf.stringToTerraform(this._caCertPem),
      insecure: cdktf.booleanToTerraform(this._insecure),
      method: cdktf.stringToTerraform(this._method),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._requestHeaders),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
