# `usergroupMembers` Submodule <a name="`usergroupMembers` Submodule" id="@skeptools/provider-slack.usergroupMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UsergroupMembers <a name="UsergroupMembers" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers"></a>

Represents a {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members slack_usergroup_members}.

#### Initializers <a name="Initializers" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new UsergroupMembers(Construct Scope, string Id, UsergroupMembersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.config">Config</a></code> | <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig">UsergroupMembersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig">UsergroupMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |

---

##### `IsConstruct` <a name="IsConstruct" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

UsergroupMembers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupIdInput">UsergroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupId">UsergroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `UsergroupIdInput`<sup>Optional</sup> <a name="UsergroupIdInput" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupIdInput"></a>

```csharp
public string UsergroupIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `UsergroupId`<sup>Required</sup> <a name="UsergroupId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.usergroupId"></a>

```csharp
public string UsergroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UsergroupMembersConfig <a name="UsergroupMembersConfig" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig"></a>

#### Initializer <a name="Initializer" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Slack;

new UsergroupMembersConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string UsergroupId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.usergroupId">UsergroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}. |
| <code><a href="#@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#members UsergroupMembers#members}.

---

##### `UsergroupId`<sup>Required</sup> <a name="UsergroupId" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.usergroupId"></a>

```csharp
public string UsergroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#usergroup_id UsergroupMembers#usergroup_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@skeptools/provider-slack.usergroupMembers.UsergroupMembersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/slack/r/usergroup_members#id UsergroupMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



