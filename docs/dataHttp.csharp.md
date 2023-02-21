# `dataHttp` Submodule <a name="`dataHttp` Submodule" id="@cdktf/provider-http.dataHttp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHttp <a name="DataHttp" id="@cdktf/provider-http.dataHttp.DataHttp"></a>

Represents a {@link https://www.terraform.io/docs/providers/http/d/http http}.

#### Initializers <a name="Initializers" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Http;

new DataHttp(Construct Scope, string Id, DataHttpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-http.dataHttp.DataHttp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-http.dataHttp.DataHttpConfig">DataHttpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetCaCertPem">ResetCaCertPem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-http.dataHttp.DataHttp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-http.dataHttp.DataHttp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-http.dataHttp.DataHttp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-http.dataHttp.DataHttp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-http.dataHttp.DataHttp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-http.dataHttp.DataHttp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetCaCertPem` <a name="ResetCaCertPem" id="@cdktf/provider-http.dataHttp.DataHttp.resetCaCertPem"></a>

```csharp
private void ResetCaCertPem()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-http.dataHttp.DataHttp.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-http.dataHttp.DataHttp.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktf/provider-http.dataHttp.DataHttp.resetRequestBody"></a>

```csharp
private void ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.resetRequestHeaders"></a>

```csharp
private void ResetRequestHeaders()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-http.dataHttp.DataHttp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Http;

DataHttp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-http.dataHttp.DataHttp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Http;

DataHttp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Http;

DataHttp.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-http.dataHttp.DataHttp.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.responseBody">ResponseBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.responseHeaders">ResponseHeaders</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.caCertPemInput">CaCertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.insecureInput">InsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestBodyInput">RequestBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.caCertPem">CaCertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.insecure">Insecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestBody">RequestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-http.dataHttp.DataHttp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-http.dataHttp.DataHttp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-http.dataHttp.DataHttp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-http.dataHttp.DataHttp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-http.dataHttp.DataHttp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-http.dataHttp.DataHttp.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-http.dataHttp.DataHttp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-http.dataHttp.DataHttp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-http.dataHttp.DataHttp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-http.dataHttp.DataHttp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-http.dataHttp.DataHttp.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-http.dataHttp.DataHttp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResponseBody`<sup>Required</sup> <a name="ResponseBody" id="@cdktf/provider-http.dataHttp.DataHttp.property.responseBody"></a>

```csharp
public string ResponseBody { get; }
```

- *Type:* string

---

##### `ResponseHeaders`<sup>Required</sup> <a name="ResponseHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.property.responseHeaders"></a>

```csharp
public StringMap ResponseHeaders { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-http.dataHttp.DataHttp.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `CaCertPemInput`<sup>Optional</sup> <a name="CaCertPemInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.caCertPemInput"></a>

```csharp
public string CaCertPemInput { get; }
```

- *Type:* string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.insecureInput"></a>

```csharp
public object InsecureInput { get; }
```

- *Type:* object

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestBodyInput"></a>

```csharp
public string RequestBodyInput { get; }
```

- *Type:* string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-http.dataHttp.DataHttp.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktf/provider-http.dataHttp.DataHttp.property.caCertPem"></a>

```csharp
public string CaCertPem { get; }
```

- *Type:* string

---

##### `Insecure`<sup>Required</sup> <a name="Insecure" id="@cdktf/provider-http.dataHttp.DataHttp.property.insecure"></a>

```csharp
public object Insecure { get; }
```

- *Type:* object

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-http.dataHttp.DataHttp.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestBody"></a>

```csharp
public string RequestBody { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-http.dataHttp.DataHttp.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-http.dataHttp.DataHttp.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-http.dataHttp.DataHttp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHttpConfig <a name="DataHttpConfig" id="@cdktf/provider-http.dataHttp.DataHttpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-http.dataHttp.DataHttpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Http;

new DataHttpConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Url,
    string CaCertPem = null,
    object Insecure = null,
    string Method = null,
    string RequestBody = null,
    System.Collections.Generic.IDictionary<string, string> RequestHeaders = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.url">Url</a></code> | <code>string</code> | The URL for the request. Supported schemes are `http` and `https`. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.caCertPem">CaCertPem</a></code> | <code>string</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.insecure">Insecure</a></code> | <code>object</code> | Disables verification of the server's certificate chain and hostname. Defaults to `false`. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.method">Method</a></code> | <code>string</code> | The HTTP Method for the request. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestBody">RequestBody</a></code> | <code>string</code> | The request body as a string. |
| <code><a href="#@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of request header field names and values. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL for the request. Supported schemes are `http` and `https`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#url DataHttp#url}

---

##### `CaCertPem`<sup>Optional</sup> <a name="CaCertPem" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.caCertPem"></a>

```csharp
public string CaCertPem { get; set; }
```

- *Type:* string

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#ca_cert_pem DataHttp#ca_cert_pem}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

Disables verification of the server's certificate chain and hostname. Defaults to `false`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#insecure DataHttp#insecure}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The HTTP Method for the request.

Allowed methods are a subset of methods defined in [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-4.3) namely, `GET`, `HEAD`, and `POST`. `POST` support is only intended for read-only URLs, such as submitting a search.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#method DataHttp#method}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestBody"></a>

```csharp
public string RequestBody { get; set; }
```

- *Type:* string

The request body as a string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_body DataHttp#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-http.dataHttp.DataHttpConfig.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of request header field names and values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/http/d/http#request_headers DataHttp#request_headers}

---



