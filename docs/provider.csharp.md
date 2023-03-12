# `provider` Submodule <a name="`provider` Submodule" id="@skeptools/provider-slack.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SlackProvider <a name="SlackProvider" id="@skeptools/provider-slack.provider.SlackProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack slack}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.provider.SlackProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new SlackProvider(Construct Scope, string Id, SlackProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-slack.provider.SlackProviderConfig">SlackProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-slack.provider.SlackProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.provider.SlackProviderConfig">SlackProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.resetAlias">ResetAlias</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-slack.provider.SlackProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-slack.provider.SlackProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-slack.provider.SlackProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-slack.provider.SlackProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-slack.provider.SlackProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-slack.provider.SlackProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-slack.provider.SlackProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-slack.provider.SlackProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-slack.provider.SlackProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@skeptools/provider-slack.provider.SlackProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-slack.provider.SlackProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

SlackProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-slack.provider.SlackProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-slack.provider.SlackProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-slack.provider.SlackProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-slack.provider.SlackProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-slack.provider.SlackProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@skeptools/provider-slack.provider.SlackProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-slack.provider.SlackProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-slack.provider.SlackProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@skeptools/provider-slack.provider.SlackProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@skeptools/provider-slack.provider.SlackProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@skeptools/provider-slack.provider.SlackProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@skeptools/provider-slack.provider.SlackProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@skeptools/provider-slack.provider.SlackProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-slack.provider.SlackProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SlackProviderConfig <a name="SlackProviderConfig" id="@skeptools/provider-slack.provider.SlackProviderConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.provider.SlackProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new SlackProviderConfig {
    string Token,
    string Alias = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.provider.SlackProviderConfig.property.token">Token</a></code> | <code>string</code> | The OAuth token used to connect to Slack. |
| <code><a href="#@skeptools/provider-slack.provider.SlackProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |

---

##### `Token`<sup>Required</sup> <a name="Token" id="@skeptools/provider-slack.provider.SlackProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

The OAuth token used to connect to Slack.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack#token SlackProvider#token}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@skeptools/provider-slack.provider.SlackProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack#alias SlackProvider#alias}

---



