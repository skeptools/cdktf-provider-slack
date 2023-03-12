# `dataSlackUsergroup` Submodule <a name="`dataSlackUsergroup` Submodule" id="@skeptools/provider-slack.dataSlackUsergroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSlackUsergroup <a name="DataSlackUsergroup" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/d/usergroup slack_usergroup}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new DataSlackUsergroup(Construct Scope, string Id, DataSlackUsergroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig">DataSlackUsergroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig">DataSlackUsergroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

DataSlackUsergroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.autoType">AutoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.handle">Handle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.usergroupIdInput">UsergroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.usergroupId">UsergroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutoType`<sup>Required</sup> <a name="AutoType" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.autoType"></a>

```csharp
public string AutoType { get; }
```

- *Type:* string

---

##### `Handle`<sup>Required</sup> <a name="Handle" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.handle"></a>

```csharp
public string Handle { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UsergroupIdInput`<sup>Optional</sup> <a name="UsergroupIdInput" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.usergroupIdInput"></a>

```csharp
public string UsergroupIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UsergroupId`<sup>Required</sup> <a name="UsergroupId" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.usergroupId"></a>

```csharp
public string UsergroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSlackUsergroupConfig <a name="DataSlackUsergroupConfig" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new DataSlackUsergroupConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UsergroupId,
    string Description = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.usergroupId">UsergroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#usergroup_id DataSlackUsergroup#usergroup_id}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#description DataSlackUsergroup#description}. |
| <code><a href="#@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#id DataSlackUsergroup#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UsergroupId`<sup>Required</sup> <a name="UsergroupId" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.usergroupId"></a>

```csharp
public string UsergroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#usergroup_id DataSlackUsergroup#usergroup_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#description DataSlackUsergroup#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-slack.dataSlackUsergroup.DataSlackUsergroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/d/usergroup#id DataSlackUsergroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



