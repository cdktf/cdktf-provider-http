# `data_http`

Refer to the Terraform Registory for docs: [`data_http`](https://www.terraform.io/docs/providers/http/d/http).

# `dataHttp` Submodule <a name="`dataHttp` Submodule" id="@cdktf/provider-http.dataHttp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHttp <a name="DataHttp" id="@cdktf/provider-http.dataHttp.DataHttp"></a>

Represents a {@link https://www.terraform.io/docs/providers/http/d/http http}.

#### Initializers <a name="Initializers" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.http.data_http.DataHttp;

DataHttp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .url(java.lang.String)
//  .caCertPem(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .method(java.lang.String)
//  .requestBody(java.lang.String)
//  .requestHeaders(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.method">method</a></code> | <code>java.lang.String</code> | The HTTP Method for the request. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.requestBody">requestBody</a></code> | <code>java.lang.String</code> | The request body as a string. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of request header field names and values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.url"></a>

- *Type:* java.lang.String

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#url DataHttp#url}

---

##### `caCertPem`<sup>Optional</sup> <a name="caCertPem" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.caCertPem"></a>

- *Type:* java.lang.String

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#insecure DataHttp#insecure}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.method"></a>

- *Type:* java.lang.String

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#method DataHttp#method}

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.requestBody"></a>

- *Type:* java.lang.String

The request body as a string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_body DataHttp#request_body}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.requestHeaders"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of request header field names and values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_headers DataHttp#request_headers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetCaCertPem">resetCaCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetRequestBody">resetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-http.dataHttp.DataHttp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-http.dataHttp.DataHttp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-http.dataHttp.DataHttp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCaCertPem` <a name="resetCaCertPem" id="@cdktf/provider-http.dataHttp.DataHttp.resetCaCertPem"></a>

```java
public void resetCaCertPem()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-http.dataHttp.DataHttp.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-http.dataHttp.DataHttp.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetRequestBody` <a name="resetRequestBody" id="@cdktf/provider-http.dataHttp.DataHttp.resetRequestBody"></a>

```java
public void resetRequestBody()
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.resetRequestHeaders"></a>

```java
public void resetRequestHeaders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-http.dataHttp.DataHttp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.http.data_http.DataHttp;

DataHttp.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-http.dataHttp.DataHttp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.http.data_http.DataHttp;

DataHttp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.http.data_http.DataHttp;

DataHttp.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.body">body</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.responseBody">responseBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.responseHeaders">responseHeaders</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.statusCode">statusCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.caCertPemInput">caCertPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestBodyInput">requestBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestHeadersInput">requestHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestBody">requestBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-http.dataHttp.DataHttp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-http.dataHttp.DataHttp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-http.dataHttp.DataHttp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-http.dataHttp.DataHttp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-http.dataHttp.DataHttp.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-http.dataHttp.DataHttp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-http.dataHttp.DataHttp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-http.dataHttp.DataHttp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-http.dataHttp.DataHttp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-http.dataHttp.DataHttp.property.body"></a>

```java
public java.lang.String getBody();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-http.dataHttp.DataHttp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `responseBody`<sup>Required</sup> <a name="responseBody" id="@cdktf/provider-http.dataHttp.DataHttp.property.responseBody"></a>

```java
public java.lang.String getResponseBody();
```

- *Type:* java.lang.String

---

##### `responseHeaders`<sup>Required</sup> <a name="responseHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.property.responseHeaders"></a>

```java
public StringMap getResponseHeaders();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-http.dataHttp.DataHttp.property.statusCode"></a>

```java
public java.lang.Number getStatusCode();
```

- *Type:* java.lang.Number

---

##### `caCertPemInput`<sup>Optional</sup> <a name="caCertPemInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.caCertPemInput"></a>

```java
public java.lang.String getCaCertPemInput();
```

- *Type:* java.lang.String

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.insecureInput"></a>

```java
public java.lang.Object getInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `requestBodyInput`<sup>Optional</sup> <a name="requestBodyInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestBodyInput"></a>

```java
public java.lang.String getRequestBodyInput();
```

- *Type:* java.lang.String

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `caCertPem`<sup>Required</sup> <a name="caCertPem" id="@cdktf/provider-http.dataHttp.DataHttp.property.caCertPem"></a>

```java
public java.lang.String getCaCertPem();
```

- *Type:* java.lang.String

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktf/provider-http.dataHttp.DataHttp.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-http.dataHttp.DataHttp.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `requestBody`<sup>Required</sup> <a name="requestBody" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestBody"></a>

```java
public java.lang.String getRequestBody();
```

- *Type:* java.lang.String

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-http.dataHttp.DataHttp.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-http.dataHttp.DataHttp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataHttpConfig <a name="DataHttpConfig" id="@cdktf/provider-http.dataHttp.DataHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-http.dataHttp.DataHttpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.http.data_http.DataHttpConfig;

DataHttpConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .url(java.lang.String)
//  .caCertPem(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .method(java.lang.String)
//  .requestBody(java.lang.String)
//  .requestHeaders(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.url">url</a></code> | <code>java.lang.String</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.caCertPem">caCertPem</a></code> | <code>java.lang.String</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.method">method</a></code> | <code>java.lang.String</code> | The HTTP Method for the request. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestBody">requestBody</a></code> | <code>java.lang.String</code> | The request body as a string. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of request header field names and values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#url DataHttp#url}

---

##### `caCertPem`<sup>Optional</sup> <a name="caCertPem" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.caCertPem"></a>

```java
public java.lang.String getCaCertPem();
```

- *Type:* java.lang.String

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#insecure DataHttp#insecure}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#method DataHttp#method}

---

##### `requestBody`<sup>Optional</sup> <a name="requestBody" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestBody"></a>

```java
public java.lang.String getRequestBody();
```

- *Type:* java.lang.String

The request body as a string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_body DataHttp#request_body}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of request header field names and values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_headers DataHttp#request_headers}

---



